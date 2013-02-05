\slidetitle{Introdução}

# Introdução

### Introdução

O sistema de numeração decimal possui 10 dígitos daí a nomenclatura decimal.

Entretanto na informática este sistema de numeração provou-se falho. Então foi
usado o sistema de numeração binário, o qual possui apenas os valores 0 e 1.

---

\slidetitle{Representação Numérica}

# Representação Numérica

### Representação Numérica

Dado um número $n$ na base $\beta$, isto é,
$n = (a_j \cdot a_{j-1} \dots a_2 \cdot a_1 \cdot a_0)_\beta$, sendo
$0 \le a_k \le \beta-1$ com $k = 0, \dots, j$ podemos representá-lo na forma polinomial:

\begin{equation}
n = a_j \beta^j + a_{j-1} \beta^{j-1} + \dots + a_2 \beta^2 + a_1 \beta^1 + a_0 \beta^0
\end{equation}

## Representação decimal

### Representação decimal

Assim para escrevermos o número $(815)_{10}$, fazemos $\beta = 10$:

\begin{equation}
8 \cdot 10^2 + 1 \cdot 10^1 + 5 \cdot 10^0 = 815
\end{equation}

## Representação binária

### Representação binária

E quanto qual seria o número $(0011\, 0010\, 1111)_2$?

\begin{equation}
1 \cdot 2^9 + 1 \cdot 2^8 + 1 \cdot 2^5 + 1 \cdot 2^3 + 1 \cdot 2^2 + 1 \cdot 2^1 + 1 \cdot 2^0 = 815
\end{equation}

Temos o mesmo número representado de outra maneira.

---

\slidetitle{Conversão binário para decimal}

# Conversão binário para decimal

### Conversão binário para decimal

É possível notar que de posse de uma representação numérica binária podemos
fazer a conversão para decimal usando a fórmula diretamente, pois a representação decimal
é a convenção utilizada pelo ser humano. Mas e o contrário?

---

\slidetitle{Conversão decimal para binário}

# Conversão decimal para binário

### Conversão decimal para binário

Considere o número $(42)_{10}$ e $(a_j \cdot a_{j-1} \dots a_1 \cdot a_0)_2$ sua representação
binária. Pelo processo inverso temos:

\begin{eqnarray}
n_0 = 42 = 2 \cdot 21 + 0 = 2 \cdot n_0 + a_0 \Rightarrow a_0 &=& 0 \\
n_1 = 21 = 2 \cdot 10 + 1 = 2 \cdot n_1 + a_1 \Rightarrow a_1 &=& 1 \\
n_2 = 10 = 2 \cdot 5 + 0 = 2 \cdot n_2 + a_2 \Rightarrow a_2 &=& 0 \\
n_3 = 5 = 2 \cdot 2 + 1 = 2 \cdot n_3 + a_3 \Rightarrow a_3 &=& 1 \\
n_4 = 2 = 2 \cdot 1 + 0 = 2 \cdot n_4 + a_4 \Rightarrow a_4 &=& 0 \\
n_5 = 1 = 2 \cdot 0 + 1 = 2 \cdot n_5 + a_5 \Rightarrow a_5 &=& 1
\end{eqnarray}

Temos o número $(0010\, 1010)_2$.

### Conversão decimal para binário

Podemos a partir desse algorítimo, criar ferramentas que facilitam a conversão. Por
exemplo criar uma tabela do tipo:

 128    64     32     16      8      4      2      1
-----  -----  -----  -----  -----  -----  -----  -----
  0      0      1      0      1      0      1      0

Dessa forma seremos capazes de decompor o valor somando as potências de 2
até que o resultado seja o número esperado.

Nesse caso $32 + 8 + 2 = 42$

### Referências

* [www.mat.uel.br - Erros - Representações na base decimal e binária](http://www.mat.uel.br/plnatti/Calculo%20Numerico/Aulas/Aula1-C%C3%A1lculo%20Num%C3%A9rico_Erros.ppt)
* [eltiger.wordpress.com - Conversão binária para decimal e vice-versa](http://eltiger.wordpress.com/2011/10/08/macete-dos-alunos-conversao-binaria-para-decimal-e-vice-versa-sem-o-uso-de-muitos-calculos-matematicos/)
* [fatosmatematicos.blogspot.com.br - Conversão de Números Decimais Para a Base Binária e Vice-Versa](http://fatosmatematicos.blogspot.com.br/2011/02/conversao-de-numeros-decimais-para-base.html)
* [www.infomaroto.com - Converter decimais em binários usando Javascript](http://www.infomaroto.com/blog/converter-decimais-em-binarios-usando-javascript/)


