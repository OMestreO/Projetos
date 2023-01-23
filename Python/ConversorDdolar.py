D = int(input("Digite um valor em reais R$:"))
cotação = 5.26

print("Com R${:.0f} você consegue comprar US${:.0f}".format (D, D/cotação))