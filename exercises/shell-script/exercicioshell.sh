
#!/bin/bash

meucomando=$(hostname)
echo "Este script está rodando no computador: $meucomando" 

caminhoarquivo="/home/juliette/unix_tests/exercicioshell.sh"
if [ -e $caminhoarquivo ]
  then
     echo "O caminho $caminhoarquivo está habilitado!"
fi
if [ -w $caminhoarquivo ]
  then
    echo "Você tem permissão para editar $caminhoarquivo"
  else
    echo "Você NÃO foi autorizado a editar $caminhoarquivo"
fi

PALAVRAS="shell script usando estrutura repetição for terminal"
for WORD in $PALAVRAS
do 
echo $WORD
done



resposta=$@
for elementos in $resposta
do
if [ -f $resposta ]
then
echo "é um arquivo comum"
elif [ -d $resposta ]
then
echo "é um diretorio"
else 
echo "é outro tipo de coisa"
fi 
ls -l $resposta
done


DIRECTORY=$1
if [ -d "$DIRECTORY" ]
  then
    FILES=`ls -l $DIRECTORY | wc -l`
    echo "O $DIRECTORY tem $FILES arquivos."
else
    echo "O argumento $DIRECTORY não é um diretório!"
fi
done

DATE=$(date +%F)

for arquivo in 'ls *.png'
do
mv $arquivo ${DATE}-${arquivo}
done
 
