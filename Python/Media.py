nota1= 0
nota2= 0
nota3= 0
nota4= 0

def media (nota1,nota2,nota3,nota4):
    nota1=float(input("Primeira nota do aluno :"))
    nota2=float(input("Segunda nota do aluno :"))
    nota3=float(input("terceira nota do aluno :"))
    nota4=float(input("quarta nota do aluno :"))
    soma= nota1+nota2+nota3+nota4
    media = soma/4 
    return f"{media:.1f}"

print (media(nota1,nota2,nota3,nota4))