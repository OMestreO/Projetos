D = int(input("Quantos dias alugado:"))
DRS= D*60
K = float(input("Quantos KM foram percoridos:"))
KRS = K*0.15
T = DRS+KRS
print("O valor total a pagar será de: R${:.2f}".format(T))