## PRACTICAL LANGUAGE PROCESSING
## PLP-PM-EBA5004-GROUP9


---  

## SECTION 1 : EXECUTIVE SUMMARY / PAPER ABSTRACT

In the field of healthcare, medical journals regularly publish information about various treatments in use today. Patients, especially those with higher education levels, often want to engage more actively with their healthcare providers and understand their treatment options better. However, this increased patient engagement can strain already limited medical resources. Many patients also turn to the internet for information about their health, but they often struggle to understand highly technical medical publications, and sometimes the media misinterprets these findings, leading to misinformation.

To address these challenges, advances in Natural Language Processing (NLP) tools and translation technologies, such as T5 (Raffel et al., 2019), BERT (Devlin et al., 2018), GPT (Brown et al, 2020), and Encoder-Decoder approaches, can be used to bridge the gaps between complex medical knowledge and patient understanding, enhancing healthcare decision-making.


---

## SECTION 2 : PROJECT TEAM MEMBERS

| Official Full Name  | Student ID  |
| :------------ |:--------------- |
| Zhong Xiaohui | A0249305E | 
| Lim Chang Siang | A0176266W | 
| Li Zhenghao, Kelvin | A0031400J |
| Zheng Xiaolan | A0249271B |
| Wu Jingyi | A0177701E

---

## SECTION 3 : RUNNING THE APPLICATION
`First, download the model binary and place it into the server/t5-model folder`
```
1. Download Link: https://www.changsiang.net/files/pytorch_model.bin (891.7 MB)
Mirror Link: https://drive.google.com/file/d/1cNrGWFUpDWssQRvJEeHLpRGLuUNleKlz/view 
2. Place the file "pytorch_model.bin" into the server/t5-model folder
```

`To run the application, navigate to the "server" folder and run the following command`
```
cd server
pip install -r requirements.txt
python main.py
```

`Then navigate to ui folder and run the following command`
```
cd ui
npm install
ng serve
```
`Then open your web broswer and enter localhost:4200 in the address bar`

---

## SECTION 4: USING THE APPLICATION
You can use the application with the following interactions

### Translate complex medical text into readable Plain Language Adaptation
In the chatbox, paste a paragrapgh of a medical abstract and see the application attempt to simplify the language of the text
You may use the following text as an example 
```
Hyperkalemia is a potentially life-threatening metabolic problem caused by inability of the kidneys to excrete potassium, impairment of the mechanisms that move potassium from the circulation into the cells, or a combination of these factors. Acute episodes of hyperkalemia commonly are triggered by the introduction of a medication affecting potassium homeostasis; illness or dehydration also can be triggers. In patients with diabetic nephropathy, hyperkalemia may be caused by the syndrome of hyporeninemic hypoaldosteronism. The presence of typical electrocardiographic changes or a rapid rise in serum potassium indicates that hyperkalemia is potentially life threatening. Urine potassium, creatinine, and osmolarity should be obtained as a first step in determining the cause of hyperkalemia, which directs long-term treatment. Intravenous calcium is effective in reversing electrocardiographic changes and reducing the risk of arrhythmias but does not lower serum potassium. Serum potassium levels can be lowered acutely by using intravenous insulin and glucose, nebulized beta2 agonists, or both. Sodium polystyrene therapy, sometimes with intravenous furosemide and saline, is then initiated to lower total body potassium levels.
```

### Provide a short summary of the medical text

The output may be too long and complex to be understood. In this case, you can reply to the bot with `tldr` and the application will return a shorter text version
```
tldr
```

Altnatively, you may also prefix the query text with `tldr: ` to obtain the short summary immediately
```
tldr: Hyperkalemia is a potentially life-threatening metabolic problem caused by inability of the kidneys to excrete potassium, impairment of the mechanisms that move potassium from the circulation into the cells, or a combination of these factors. Acute episodes of hyperkalemia commonly are triggered by the introduction of a medication affecting potassium homeostasis; illness or dehydration also can be triggers. In patients with diabetic nephropathy, hyperkalemia may be caused by the syndrome of hyporeninemic hypoaldosteronism. The presence of typical electrocardiographic changes or a rapid rise in serum potassium indicates that hyperkalemia is potentially life threatening. Urine potassium, creatinine, and osmolarity should be obtained as a first step in determining the cause of hyperkalemia, which directs long-term treatment. Intravenous calcium is effective in reversing electrocardiographic changes and reducing the risk of arrhythmias but does not lower serum potassium. Serum potassium levels can be lowered acutely by using intravenous insulin and glucose, nebulized beta2 agonists, or both. Sodium polystyrene therapy, sometimes with intravenous furosemide and saline, is then initiated to lower total body potassium levels.
```

## Any queries regarding this application should be directed to Lim Chang Siang at changsiang.lim@u.nus.edu.