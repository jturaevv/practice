import json

input_file = '/home/fr1end/Downloads/exam-1.txt'
output_file = 'exams.json'

result = []
try:
    with open(input_file, 'r') as file:
        content = file.read().split('\n')
        variant = []

        for index, element in enumerate(content):
            if index % 5 == 0:
                result.append(variant)
                variant = []

            variant.append(element)

except FileNotFoundError:
    print("The file does not exist.")

with open(output_file, 'w') as file:
  file.write(json.dumps(result))
