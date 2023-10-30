from transformers import T5Tokenizer, T5ForConditionalGeneration
import torch

class T5Inference:
    def __init__(self):
        self.tokenizer = T5Tokenizer.from_pretrained('t5-base')
        self.model = T5ForConditionalGeneration.from_pretrained("t5-model")

    def predict(self, text):
        input_ids = self.tokenizer.encode(text, return_tensors="pt")
        outputs = self.model.generate(input_ids, max_length=350,
                num_beams=2,
                repetition_penalty=2.5,
                length_penalty=1.0,
                early_stopping=True)
        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)