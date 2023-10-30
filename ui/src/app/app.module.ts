import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { SystemMessageComponent } from './system-message/system-message.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { TypingComponent } from './typing/typing.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SystemMessageComponent,
    UserMessageComponent,
    TypingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
