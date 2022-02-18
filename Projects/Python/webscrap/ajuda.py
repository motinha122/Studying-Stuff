import time
import math

quantidade_maxima_de_importacao = 15

#Declarar quantos vídeos foram baixados e fazendo a diferença entre a qauantidade total e a quantidade q pode ser enviado
quantidade_de_videos = int(input('Digite a quantidade de videos que foram baixados:\t'))
videos_a_mais = quantidade_de_videos - quantidade_maxima_de_importacao

# Abrir Arquivo word
def abrir_word():
    print("Abrir word")
    time.sleep(1)
    time.sleep(1.5)
    time.sleep(2.5)
abrir_word()

# Indo para o youtube
def caminho_para_o_youtube():
    print("Caminho youtube")
    time.sleep(2)
caminho_para_o_youtube()

# Execução para subir videos no youtube
def youtube ():
    print("Youtube")
# Selecionar videos baixados
if (quantidade_de_videos > quantidade_maxima_de_importacao):
    repeticao_do_processo = math.ceil(videos_a_mais/quantidade_maxima_de_importacao)# Checar quantas vezes preciso refazer o processo de subir os vídeos
    
    if(repeticao_do_processo > 1):       
        for repeticao_do_loop_publicacao in range (1, repeticao_do_processo + 1):
            youtube()
            time.sleep(3)
            time.sleep(1)
            
            # Selecionar no máximo 15 vídeos por vez                
            for repeticao_do_loop_selecao in range (1, videos_a_mais + 1): # repeticao_do_loop_selecao é somente para auxiliar o contador FOR
                print("Repetição")

            time.sleep(1)
            time.sleep(1)
            time.sleep(30)
            print("Repetição processo")

            videos_a_mais = videos_a_mais - quantidade_maxima_de_importacao

    elif(repeticao_do_processo == 1):
        youtube()
        time.sleep(1)
        time.sleep(1)
        print("Rep 2")
else:
    youtube()
    time.sleep(1)
    time.sleep(1)
    print("else")

