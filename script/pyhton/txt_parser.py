import json

input_file = './exams.json'
output_file = '/home/fr1end/Downloads/exam-hirurgiya.txt'

exam = []
try:
    with open(input_file, 'r') as file:
        content = json.load(file)
        # content = file.read().replace('\n', '').replace('?', '').split('++++')
    for element in content:
    #   variant = element.split('\n')
      variant = element
      question, *answers = variant

      item = f"?{question.strip()}\n"

      item += f"+{answers[0].strip()}\n"
      for answer in answers[1::]:
        item += f"-{answer.strip()}\n"

      exam.append(item)

except FileNotFoundError:
    print("The file does not exist.")

with open(output_file, 'w') as file:
  file.write(''.join(exam))
