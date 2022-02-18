from selenium import webdriver
import requests
import io
from PIL import Image
import time

PATH = "C:\\Users\\roblo\\OneDrive\\Área de Trabalho\\webscrap\\chromedriver.exe"

wd = webdriver.Chrome(PATH)

def dw_img(dw_path,url,file_name):
    img_content = requests.get(url).content
    img_file = io.BytesIO(img_content)
    img = Image.open(img_file)
    file_path = dw_path + file_name

    with open(file_path,"wb") as f:
        img.save(f,"JPEG")

    print("Finished")

for c in range(1,117):
    img_url = "https://image.slidesharecdn.com/curso-completo-de-manutencao-de-placa-maeswww-apostilagratis-com-121205102429-phpapp02/95/cursocompletodemanutencaodeplacamaes-wwwapostilagratiscom-{}-638.jpg?cb=1354703104".format(c)
    dw_img("C:\\Users\\roblo\\OneDrive\\Área de Trabalho\\webscrap\\pasta\\",img_url,"{}.jpg".format(c))
    time.sleep(0.100)

img_list=[]

for i in range (1,117):
    image = Image.open(r"C:\\Users\\roblo\\OneDrive\\Área de Trabalho\\webscrap\\pasta\\{}.jpg".format(i))
    imi = image.convert("RGB")
    img_list.append(imi)

var1 = img_list[0]
img_list.pop(0)
var1.save(r"C:\\Users\\roblo\\OneDrive\\Área de Trabalho\\webscrap\\curso.pdf",save_all=True, append_images=img_list)

