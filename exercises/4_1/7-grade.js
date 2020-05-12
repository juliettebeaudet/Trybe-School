/* 7- Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100)
em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada
for menor que 0 ou maior que 100.*/

let grade; //qualquer num
grade = 12;

switch (grade) {
    case (grade >= 90):
        grade = "A";
        break;
    case (grade >= 80 && grade < 90):
        grade = "B";
        break;
    case (grade >= 70 && grade < 80):
        grade = "C";
        break;
    case (grade >= 60 && grade < 70):
        grade = "D";
        break;
    case (grade >= 50 && grade < 60):
        grade = "E";
        break;
    case (grade < 50):
        grade = "F";
        break;
    case (grade < 0 || grade > 100):
        console.log("Erro");
        break;
}
