<?php

static $listaOpcoesValidas = [1, 2, 3, 4, 5, 6, 7];
$AlunosMemory = [];
$ProfessorMemory =[];
$opcao = 0;

function pegarIndiceAlunoArrayPeloNome($nomeBusca)
{
    global $AlunosMemory;
    foreach ($AlunosMemory as $key => $value) {
        if ($value["Nome"] == $nomeBusca) {
            return $key;
        }
    }
    return -1;
}

function CadastrarAluno($nome, $turma, $curso, $mensalidade)
{
    global $AlunosMemory;
    $AlunosMemory[] = [
        "Nome" => $nome,
        "Turma" => $turma,
        "Curso" => $curso,
        "Mensalidade" => $mensalidade
    ];
}

function CadastrarProf($nome, $salario){
    global $ProfessorMemory;
    $ProfessorMemory[] = [
        "Nome" => $nome,
        "Salario"=> $salario
    ];
}

function ProfCadastro(){
    echo "===Cadastro de Professores===" . PHP_EOL;
    $nome = readline("Digite o NOME do professor: ");
    $salario = readline("Digite o SALÁRIO do professor: ");

    popen('cls', 'w');

    CadastrarProf($nome, $salario);
    echo "Registro realizado com sucesso !!" . PHP_EOL;
    readline("Enter, para continuar...");
}

function MenuCadastro()
{
    echo "===Menu Cadastro===" . PHP_EOL;
    $nome = readline("Digite o NOME do aluno: ");
    $turma = readline("Digite a TURMA do aluno: ");
    $curso = readline("Digite o CURSO do aluno: ");
    $mensalidade = readline("Digite o valor da MENSALIDADE do aluno: ");

    popen('cls', 'w');
    CadastrarAluno($nome, $turma, $curso, $mensalidade);

    echo "Registro realizado com sucesso !!" . PHP_EOL;
    readline("Enter, para continuar...");
}

function MenuListar()
{

    global $AlunosMemory;
    echo "===Lista de Alunos===" . PHP_EOL;
    foreach ($AlunosMemory as $aluno) {
        echo "+++++++++++++++++++++++++" . PHP_EOL;
        echo "Nome: " . $aluno['Nome'] . PHP_EOL;
        echo "Turma: " . $aluno['Turma'] . PHP_EOL;
        echo "Curso: " . $aluno['Curso'] . PHP_EOL;
        echo "Mensalidade paga: " . $aluno['Mensalidade']."R$" . PHP_EOL;

    }
    readline("Enter, para continuar ");
}

function MenuExcluir()
{
    global $AlunosMemory;
    echo "===Menu Excluir===" . PHP_EOL;
    $alunoExclusão = readline("Digite o nome do aluno para exclusão: ");

    $resultadoBusca = pegarIndiceAlunoArrayPeloNome($alunoExclusão);
    if ($resultadoBusca == -1) {
        readline("!!!!!  Nome Invalido !!!!!");
        readline("Enter, para continuar ");
    } else {
        popen('cls', 'w');
        unset($AlunosMemory[$resultadoBusca]);
        echo "Registro excluido com sucesso !!" . PHP_EOL;
        readline("Enter, para continuar ");
    }
}

function MenuAlterar()
{

    global $AlunosMemory;
    echo "===Menu Alterar===" . PHP_EOL;
    $alunoExclusão = readline("Digite o nome do aluno para alteração: ");
    $resultadoBusca = pegarIndiceAlunoArrayPeloNome($alunoExclusão);
    if ($resultadoBusca == -1) {
        echo "!!!!!  Nome Invalido !!!!!" . PHP_EOL;
        readline("Enter, para continuar ");
    } else {
        popen('cls', 'w');
        $dadosAntigos = $AlunosMemory[$resultadoBusca];
        $nome = readline("Digite o novo NOME ou enter para permanecer o antigo [Antigo: " . $dadosAntigos['Nome'] . " ]: ");
        $turma = readline("Digite a nova TURMA ou enter para permanecer o antigo [Antigo: " . $dadosAntigos['Turma'] . " ]: ");
        $curso = readline("Digite o novo CURSO ou enter para permanecer o antigo [Antigo: " . $dadosAntigos['Curso'] . " ]: ");
        $mensalidade = readline("Digite o valor da MENSALIDADE ou enter para permanecer o valor antigo [Antigo: R$" . $dadosAntigos['Mensalidade'] . " ]: ");

        $AlunosMemory[$resultadoBusca]['Nome'] = $nome != "" ? $nome : $dadosAntigos['Nome'];
        $AlunosMemory[$resultadoBusca]['Turma'] = $turma != "" ? $turma : $dadosAntigos['Turma'];
        $AlunosMemory[$resultadoBusca]['Curso'] = $curso != "" ? $curso : $dadosAntigos['Curso'];
        $AlunosMemory[$resultadoBusca]['Mensalidade'] = $mensalidade != "" ? $mensalidade : $dadosAntigos['Mensalidade'];
        echo "Registro atualizado com sucesso !!" . PHP_EOL;
        readline("Enter, para continuar...");
    }
}

function SomaPag(){
    global $AlunosMemory;
    global $ProfessorMemory;

    $somaProf = 0;
    $somaAluno = 0;

    foreach ($AlunosMemory as $key => $mensalidade){
        $somaAluno = $somaAluno + $mensalidade["Mensalidade"];
    }

    foreach ($ProfessorMemory as $key => $salario){
        $somaProf = $somaProf + $salario["Salario"];
    }

    if ($somaAluno >= $somaProf){
        echo "Sim, com as mensalidade dos alunos é possível pagar o salário de todos os professores." . PHP_EOL;
    }else{
        echo "As mensalidades dos alunos não cobre o salário dos professores." . PHP_EOL;
    }

    readline("Enter, para continuar...");

}

function verificarOpcaoMenu($opcao)
{
    switch ($opcao) {
        case 1:
            MenuCadastro();
            break;
        case 2:
            MenuListar();
            break;
        case 3:
            MenuExcluir();
            break;
        case 4:
            MenuAlterar();
            break;
        case 5:
            ProfCadastro();
            break;
        case 6:
            SomaPag();
            break;
        default:
            echo "Erro cód - 001: Não deveria chegar aqui o código" . PHP_EOL;
            break;
    }
}

while ($opcao != 7) {
    echo "====Menu====" . PHP_EOL;
    echo "1 - Cadastrar Aluno" . PHP_EOL;
    echo "2 - Listar os alunos" . PHP_EOL;
    echo "3 - Excluir Aluno" . PHP_EOL;
    echo "4 - Atualizar dados Aluno" . PHP_EOL;
    echo "5 - Cadastrar professor" . PHP_EOL;
    echo "6 - Mensalidades compativeis com salários" . PHP_EOL;
    echo "7 - Sair" . PHP_EOL;

    $opcao = readline("Digite sua opção: ");
    popen('cls', 'w');

    if (!in_array($opcao, $listaOpcoesValidas)) {
        echo "!!!!!  OPÇÃO INVALIDA  !!!!!" . PHP_EOL;
        readline("Enter, para continuar...");
    } else {
        verificarOpcaoMenu($opcao);
    }

    popen('cls', 'w');
}