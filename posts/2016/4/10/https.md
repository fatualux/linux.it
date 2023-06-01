<!--
.. title: HTTPS
.. slug: https
.. date: 2016-04-10 00:00:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text
.. image_copy: 
.. previewimage:
-->

Una piccola, ma speriamo gradita, comunicazione di servizio: da qualche giorno <a href="https://www.linux.it/">www.linux.it</a>, uno dei principali punti di accesso alla comunità filo-linuxara italiana, quotidianamente visitato da centinaia di persone, è raggiungibile in HTTPS. Ancora questa non è una impostazione di default, e siamo ancora all'opera per ritoccare i vari assets inclusi nelle diverse pagine e migrare tutti gli altri siti della rete ILS, ma già una gran quantità del traffico esistente è veicolato sul protocollo sicuro.

Alla luce delle sempre più frequenti cronache digitali relative a operazioni di monitoraggio di massa ed intercettazioni non autorizzate, cifrare e proteggere le attività svolte sull'Internet è diventata una questione di principio. Anche quando si tratta di contenuti innocui e non riservati.

Per facilitare ed accelerare l'adozione di HTTPS è nato il progetto <a rel="nofollow" href="https://letsencrypt.org/">Let's Encrypt</a>, promosso in primis da <a rel="nofollow" href="https://www.eff.org/">Electronic Frontier Foundation</a> e <a rel="nofollow" href="https://www.mozilla.org/">Mozilla Foundation</a>, che eroga gratuitamente certificati SSL facilmente aggiornabili in maniera automatica: una rivoluzione per una pratica sino ad oggi ostacolata dagli alti costi di implementazione e dalla necessità di intervenire manualmente ad ogni rinnovo.

Non possiamo far altro che invitare tutti coloro che hostano uno o più siti web a dotarsi di certificati Let's Encrypt ed abilitare a loro volta la cifratura delle sessioni web, e tutti gli altri ad installare <a rel="nofollow" href="https://www.eff.org/https-everywhere">"HTTPS Everywhere"</a>, estensione per i più popolari browser che attiva la connessione sicura ogniqualvolta sia possibile (anche quando non è abilitata di default).