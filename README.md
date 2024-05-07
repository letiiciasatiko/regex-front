# regex-front

Para a validação do nome presente no codigo 
var nomeRegex = /^[^\d]+$/;
Onde a expressão ´[^\d]` aceita qualquer caracter que não seja um dígito, onde ele irá verificar primeiramente se o nome digitado pelo usuário contém algum tipo de número.

Para a validação do email foi usado o seguinte código
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
´[^\s@]+`: Corresponde a um ou mais caracteres que não sejam espaços em branco ou '@'.
´@`: Corresponde ao caractere '@'.
´\.`: Corresponde ao caractere '.' (ponto).

Esta estrutura repete a mesma expressão 3 vezes, fazendo com que as partes da estrutura de validação específicas sejam apenas caracteres sem espaço em branco e sem que seja o símbolo @.
Caso o símbolo @ seja usado ele passa para a próxima espressão repetida para inserir outro trecho de palavras que não podem ser utilizadas espaços em branco e o símbolo @
E logo depois no momento que o usuário inserir o símbolo . a última expressão repetida é inserida para o usuário digitar a última parte do email.

Para a validação do número de telefone com o código abaixo
var telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

É usada a expressão ´\d{2}\` para o usuário inserir o DDD do número de telefone dele, onde aceitará apenas 2 dígitos.
Na próxima é usada a mesma expressão porém com um comando diferente, indicando apenas aceitar 4 a 5 dígitos de números.
E por último indicando os 4 últimos números do telefone inserido.
Sempre obedecendo a estrutura oficial e mais usada de número de telefone do Brasil.
