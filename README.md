# linux.it

Questo è il repository del sito https://www.linux.it generato con [Nikola](https://www.getnikola.com/).

## Requisiti di sviluppo

- avere un sistema operativo Unix-like qualsiasi
- python installato e qualche comando

## Dipendenze

- `apt install sass # sulla macchina`

```
pip install Nikola[extras] pyaml
nikola plugin -i sass # viene scaricato dentro il repository
```

## Sviluppare in locale

```
nikola build
nikola auto --browser
```

Quando hai finito, fai un commit e invia una pull request!

Grazie per ogni contributo!

## Creare una build statica

Per creare una singola build statica, eseguire questo comandi dalla cartella `ils.org`:

```
nikola build
```

## Segnalazioni

Per segnalazioni e richieste, apri una segnalazione:

https://gitlab.com/ItalianLinuxSociety/ils.org/-/issues/new

Oppure scrivi a:

webmaster@linux.it

Grazie!

## Licenza

Salvo ove diversamente indicato tutti i contenuti sono rilasciati in pubblico dominio, Creative Commons Zero.

https://creativecommons.org/publicdomain/zero/1.0/

Eccezioni: loghi di associazioni, di partner e sponsor. Contattarli per conoscere le relative licenze.
