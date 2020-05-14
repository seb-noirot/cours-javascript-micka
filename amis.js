let amis = [
    {
        nom : "bob",
        trophes: [
            {id : 1, nom : "biere"},
            {id : 5, nom : "vomito"}
        ]
    }
]

amis[0].trophes.push({id : 20, nom : "ambulance"});

function afficherTableau() {
    let newHtml = "";
    amis.forEach(function(ami, index){
        newHtml = newHtml + "<tr>";
        newHtml = newHtml + "<td>" + ami.nom + "</td>";
        newHtml = newHtml + "<td>" + mesTrophes(ami.trophes) + "</td>";
        newHtml = newHtml + "</tr>";

        // <tr>
        //   <td>Bob</td>
        //   <td><i class="fa fa-biere></i><i class="fa fa-sick"></i></td>
        // </tr>
    });
    document.getElementById("mesAmis").innerHtml = newHtml;
}

function mesTrophes(trophes) {
    if (!trophes){
        return "Pas de trophes";
    }
    let trophesHtml = "";
    trophes.forEach(function(trophe, index){
        trophesHtml = trophesHtml +  "<i class='" + getTropheIcone(trophe) + "'></i>";
    });
    // <i class="fa fa-biere></i><i class="fa fa-sick"></i>
    return trophesHtml;
}

function getTropheIcone(trophe) {
    let icone = "fa fa-fa";
    if (trophe.nom == "biere") {
        icone = "fa fa-biere";
    } else if (trophe.nom == "vomito") {
        icone = "fa fa-sick";
    } else if (trophe.nom == "ambulance"){
        icone = "fa fa-ambulance";
    }
    return icone;
}