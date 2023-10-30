import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  inputText = '';
  conversationHistory: any = [
  ];
  thinking = false;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  sendMessage(evt: any) : void {
    if (this.inputText.length === 0) {
      return;
    }
    let queryText = this.inputText;

    if (this.inputText == 'tldr' || this.inputText == 'TLDR' || this.inputText == 'tl;dr') {
      queryText = 'tldr: ' + this.conversationHistory[this.conversationHistory.length - 2].message;
    }

    if (this.inputText.toLocaleLowerCase() == 'i don\'t understand' 
      || this.inputText.toLocaleLowerCase() == 'can you further simplify?'
      || this.inputText.toLocaleLowerCase() == 'i don\'t get it'
      || this.inputText.toLocaleLowerCase() == 'make it simpler') {
        queryText = this.conversationHistory[this.conversationHistory.length - 1].message;
    }
    const message = { source: 'user', message: this.inputText };
    this.conversationHistory.push(message);
    this.backendService.postText(`${queryText}`).subscribe((response: any) => {
      const message = { source: 'system', message: response.message };
      this.thinking = false;
      this.conversationHistory.push(message);
    });
    setTimeout(() => {
      this.thinking = true;
    }, 1500);
    this.inputText = '';
  }

}
