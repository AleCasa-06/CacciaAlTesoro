let NUM_CELLE = prompt("Con quante celle vuoi giocare?");
let NUM_TESORI;
do
{
    NUM_TESORI = prompt("Quanti Pokémon vuoi che vengano nascosti?");
}
while(NUM_TESORI > NUM_CELLE)
let tesori = new Array();
let conclusion = false;

function avvio()
{
    for (i = 0; i < NUM_TESORI; i++)
    {
        let n = Math.round(Math.random() * (NUM_CELLE - 1));
        for(i = 0; i < tesori.length; i++)
        {
            if (tesori[i] == n)
        {
            break;
        }
        }
        tesori[i] = n;
    }
    console.log(tesori);
    const table = document.getElementById("tabella");
    const row = table.insertRow(0);
    for (i = 0; i < NUM_CELLE; i++) {
        let cella = row.insertCell();
        cella.innerHTML = '<img src="img/Hidden Benjam Abdullaahi.png" height="80vw" id="hidden">';
        cella.id = "n" + i;
        cella.setAttribute("onclick","controllo(this)");
    }
    const pulsante = document.getElementById("pulsante");
    pulsante.style.display = 'none';
    NUM_CELLE = 0;
}

function controllo(casella)
{
    if(conclusion == false)
    {
        for(i = 0; i <= NUM_TESORI; i++)
        {
            if(casella.id == "n" + tesori[i - 1])
            {
                casella.innerHTML = '<img src="img/Benjam Abdullaahi.png" height="80vw" id="benjamin">';
                NUM_CELLE += 1;
                if(NUM_CELLE == NUM_TESORI)
                {
                    conclusione();
                }
                break;
            }
            casella.innerHTML = '<img src="img/Not Benjam Abdullaahi 4.png" height="80vw" id="nimajneb">';
        }
    }
}

function conclusione()
{
    alert("Well done! You fuond all them!");
    conclusion = true;
    //Non essendo stado definito un criterio secondo il quale la vittoria o la sconfitta al termine della partita ho preferito lasciare al giocatore la libertà di cercare il Pokémon per quanto tempo vuole, per chi invece cerca una sfida che lo metta alla prova è presente un'altra versione del programma dove è possibile selezionare la quantità di tentativi disponibili prima di decretare la propria sconfitta
}