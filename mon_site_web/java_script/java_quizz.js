function reponse1Vrai()//question 1 vrai
{
	document.getElementById('ici_1').innerHTML= "FAUX! On parle de l'objet sur ce site!";
	var resultatTotal=0;
}
function reponse1Faux()//question 1 faux
{
	document.getElementById('ici_1').innerHTML= "VRAI! La souris est un animal il y a même une photo un peu plus haut!";
	var resultatTotal=0;
}
var repondu3=0;
var repondu2=0;
var resultatTotal=0;
function choisirQuestion2()//question 3
{
	resultat2=0;
	const selecteur = document.getElementById("choixQuestion2");
	
	const selectionne=selecteur[selecteur.selectedIndex];
	
	const selectionFinal=selectionne.value;
	
	if (selectionFinal=='true')//tester si bonne reponse
            {
			if (repondu2=='0')//verifie si deja repondu pareil pour repondu3
				{document.getElementById('reponse2').innerHTML= '✔En effet le système mécanique à boule avait tendance à ramasser la poussière de la surface horizontale et à encrasser les rouleaux capteurs, ce qui exigeait un nettoyage interne régulier.';
				resultatTotal=resultatTotal+1;
				repondu2+=1;
				document.getElementById('suiteQuestion2').innerText="ici";
				document.getElementById('suiteQuestion2_2').innerText="Pour passer à la suite cliquez ";
				}
			else{
				alert('vous ne pouvez pas repondre deux fois à cette question');
				document.getElementById('suiteQuestion2').innerText="ici";
				document.getElementById('suiteQuestion2_2').innerText="Pour passer à la suite cliquez ";}
			}
	else
			{
			if (repondu2=='0')
				{document.getElementById('reponse2Faux').innerHTML= "❌FAUX! Le système mecanique à boule avait tendance à ramasser la poussière de la surface horizontale et à encrasser les rouleaux capteurs, ce qui exigeait un nettoyage interne régulier.";
				resultatTotal=resultatTotal+0;
				repondu2+=1;
				document.getElementById('suiteQuestion2').innerText="ici";
				document.getElementById('suiteQuestion2_2').innerText="Pour passer à la suite cliquez ";
				}
			else{
				alert('vous ne pouvez pas repondre deux fois à cette question');
				document.getElementById('suiteQuestion2').innerText="ici";
				document.getElementById('suiteQuestion2_2').innerText="Pour passer à la suite cliquez ";}
			}
}
function validation()//question 2
{
    var reponse = document.getElementById("Reponse3").value;
    
    if (reponse=='1963')
            {if (repondu3=='0')
				{document.getElementById('reponse3').innerHTML= 'Bien joué!';					
				resultatTotal=resultatTotal+1;
				alert(resultatTotal);
				repondu3+=1;
				document.getElementById('suiteQuestion3').innerHTML="ici";
				document.getElementById('suiteQuestion3_2').innerHTML="Pour passer à la suite cliquez ";
				}
			else{
				alert('vous ne pouvez pas repondre deux fois à cette question');
				document.getElementById('suiteQuestion3').innerHTML="ici";
				document.getElementById('suiteQuestion3_2').innerHTML="Pour passer à la suite cliquez ";}
			}
	else
			{if (repondu3=='0')
				{document.getElementById('reponse3Faux').innerHTML= "Non c'est 1963";					
				resultatTotal=resultatTotal+1;
				repondu3+=1;
				document.getElementById('suiteQuestion3').innerHTML="ici";
				document.getElementById('suiteQuestion3_2').innerHTML="Pour passer à la suite cliquez ";
				}
			else{
				alert('vous ne pouvez pas repondre deux fois à cette question');
				document.getElementById('suiteQuestion3').innerHTML="ici";
				document.getElementById('suiteQuestion3_3').innerHTML="Pour passer à la suite cliquez ";}
			}
alert('bravo vous avez obtenu '+resultatTotal+' sur 3 bonnes réponses');
}


