SL = float(input("Seu salário atual em R$"))
AU = float(input("Seu aumento em %"))
NS = (SL*AU)/100
SF = SL+NS
print("Seu salário antigo de R${:.2f} com o aumento de {:.0f}%, Ficara de R${:.2f}".format(SL, AU, SF))