from docx import Document

INPUT_FILE = "/home/fr1end/Downloads/3_курс_5_семестр_общая_хирургия_узб.docx"
OUTPUT_FILE = '/home/fr1end/Downloads/exam-1.txt'

def read_docx():
    doc = Document(INPUT_FILE)
    text = []
    for para in doc.paragraphs:
        text.append(para.text)
    
    with open(OUTPUT_FILE, 'w') as file:
        file.write('\n'.join(text))



read_docx()
