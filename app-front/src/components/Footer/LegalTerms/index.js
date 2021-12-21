  
import React from 'react';
import {
  Button, Header, Modal,
} from 'semantic-ui-react';

import './style.scss';

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className="modal-button">Mentions légales</Button>}
    >
      <Modal.Header>Mentions légales</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>CONDITIONS GENERALES DE VENTE</Header>
          <Header>Article 1er Désignation du vendeur</Header>
          <p>
            Le présent site est édité par la société GAS, SAS au capital de
            1.200 euros dont le siège social est sis 30 rue Gaston de Flotte à
            Marseille (13012), inscrite au registre du commerce et des sociétés
            de Marseille sous le numéro 849 864 244. L’activité principale de la
            société GAS est de proposer à la vente, analyse et conseils de
            pronostics sportifs. Un pronostic est une opinion personnelle d’une
            personne portant sur un événement sportif futur. Tous les services
            disponibles sur le Site s’adressent exclusivement à des personnes
            physiques non commerçantes, n’agissant pas dans un cadre
            professionnel, et majeures Les jeux d’argent étant interdit au
            mineur, l’utilisateur reconnaît être majeur et n’influence pas les
            mineurs de s’inscrire sur ce site. Tous les pronostics proposés sur
            ce site, sont disponible sur le marché mondial des paris sportifs.
            Chaque utilisateurs est responsable de sa mise sur les pronostics
            conseillés par la société GAS. Les Bookmakers proposés en terme
            d’affiliation sont tous agrées ARJEL (Autorité de Régulation des
            Jeux En Ligne)
          </p>
          <Header>
            Article 2- Dispositions générales relatives aux présentes conditions
            générales de vente (ci-après les CGV)
          </Header>
          <Header>1. Objet des CGV</Header>
          <p>
            Les CGV sont applicables exclusivement à la vente en ligne des
            services de la société GAS sur le site dont l’accès est libre et
            gratuit à tout internaute.
          </p>
          <Header>2. Domaine d’application des CGV</Header>
          <p>
            Les CGV régissent exclusivement les contrats de vente en ligne des
            services de la société GAS. (ci-après vendeur professionnel) aux
            acheteurs ayant la qualité de consommateurs (ci-après consommateurs)
            et constituent avec la commande en ligne les documents contractuels
            opposables aux parties, à l’exclusion de tous autres documents,
            prospectus, catalogues ou photographies des produits qui n’ont
            qu’une valeur indicative. Les CGV sont rédigées ainsi que l’ensemble
            des informations contractuelles mentionnées sur le site en langue
            française (la langue du site figure parmi les critères permettant de
            déterminer les autres pays vers lesquels le site établi en France
            dirige son activité et en conséquence la loi applicable au contrat).
          </p>
          <Header>3. Disponibilité et opposabilité des CGV</Header>
          <p>
            Les CGV sont mises à la disposition des consommateurs sur le site du
            vendeur où elles sont directement consultables et peuvent également
            lui être communiquées sur simple demande par téléphone, courrier
            électronique ou courrier postal. Les CGV sont opposables au
            consommateur qui reconnaît, en cochant une case prévue à cet effet,
            en avoir eu connaissance et les avoir acceptées avant de passer
            commande. La validation de la commande par sa confirmation vaut
            adhésion par l’acheteur aux CGV en vigueur au jour de la commande
            dont la conservation et la reproduction sont assurées par le vendeur
            professionnel conformément à l’article 1127-2 du code civil (ancien
            C. civ., art. 1369-4).
          </p>
          <Header>4. Modification des CGV</Header>
          <p>
            Le vendeur professionnel se réserve la faculté de modifier ses CGV à
            tout moment. En cas de modification des CGV, les CGV applicables
            sont celles en vigueur à la date de la commande dont une copie datée
            à ce jour peut être remise à sa demande au consommateur.
          </p>
          <Header>5. Clauses des CGV</Header>
          <p>
            La nullité d’une clause contractuelle n’entraîne pas la nullité des
            CGV L’inapplication temporaire ou permanente d’une ou plusieurs
            clauses des CGV par le vendeur professionnel ne saurait valoir
            renonciation de sa part aux autres clauses des CGV qui continuent à
            produire leurs effets.
          </p>
          <Header>Article 3- Produits</Header>
          <Header>1. Caractéristiques</Header>
          <p>
            Les services offerts à la vente présentés dans le catalogue publié
            sur le site font chacun l’objet d’un descriptif facultatif
            mentionnant leurs caractéristiques essentielles au sens de l’article
            L. 111-1 du code de la consommation.
          </p>
          <Header>2. Mode d’emploi</Header>
          <p>
            Le mode d’utilisation du produit, si c’est un élément essentiel, est
            mentionné dans le catalogue électronique ou au plus tard à sa
            livraison.
          </p>
          <Header>3. Conformité</Header>
          <p>
            Les produits sont conformes aux prescriptions en vigueur relatives à
            la sécurité et à la santé des personnes, à la loyauté des
            transactions commerciales et à la protection des consommateurs au
            moment de leur mise sur le marché (texte reproduisant C. consom.,
            art. L. 411-1, ancien C. consom., art. L. 212-1). Les produits sont
            conformes aux prescriptions du droit français en vigueur au moment
            de leur mise sur le marché.
          </p>
          <Header>Article 4- Prix</Header>
          <Header>Prix de vente</Header>
          <p>
            Les prix de vente, conformément à l’article L. 112-1 du code de la
            consommation (ancien C. consom., art. L. 113-13), sont indiqués,
            pour chacun des produits figurant dans le catalogue électronique, en
            euros toutes taxes comprises, hors frais de livraison et de
            transport mentionnés avant validation de la commande et facturés en
            supplément. Le montant total dû par le consommateur est indiqué sur
            la page de confirmation de commande. Le prix de vente du produit est
            celui en vigueur au jour de la commande. Le prix de vente des
            produits ne comprend pas les frais de port facturés en supplément du
            prix. En cas de promotion par les prix, le vendeur professionnel
            s’engage à appliquer le prix promotionnel à toute commande passée
            durant la période de la publicité faite pour la promotion.
          </p>
          <Header>Article 5- Offre</Header>
          <Header>1. Durée</Header>
          <p>
            A defaut de notification d’un désabonnement, le contrat sera
            poursuivi, chaque période mensuelle ou trimestrielle entamée donne
            lieu a perception de prix du prix de la prestation pour la période
            entière. Les offres de vente en ligne présentées sur le site sont
            valables, à défaut d’indication de durée particulière, tant que les
            produits figurent dans le catalogue électronique et dans la limite
            des stocks disponibles.
          </p>
          <Header />
          <Header>2. Acceptation</Header>
          <p>
            L’acceptation de l’offre par le consommateur est validée,
            conformément au procédé du double clic, par la confirmation de la
            commande.
          </p>
          <Header>Article 6- Commande</Header>
          <Header>1. Étapes de conclusion du contrat</Header>
          <p>
            Pour passer commande, le consommateur, après avoir rempli son panier
            virtuel en indiquant les produits sélectionnés et les quantités
            souhaitées, clique ensuite sur le bouton « Commander » et fournit
            les informations relatives à la livraison et au mode de paiement.
            Avant de cliquer sur le bouton « Confirmer la commande », le
            consommateur a la possibilité de vérifier le détail de sa commande
            et son prix total et de revenir aux pages précédentes pour corriger
            d’éventuelles erreurs ou éventuellement modifier sa commande. La
            confirmation de la commande entraîne acceptation des CGV et forme le
            contrat. Un courrier électronique accusant réception de la commande
            et de son paiement est envoyé par le vendeur dans les meilleurs
            délais.
          </p>
          <Header />
          <Header>2. Modification de commande</Header>
          <p>
            Toute modification de commande par le consommateur après
            confirmation de sa commande est soumise à l’acceptation du vendeur
            professionnel. Le vendeur professionnel se réserve le droit
            d’apporter au produit commandé les modifications qui sont liées à
            l’évolution technique dans les conditions prévues à l’article R.
            212-4 du code de la consommation (ancien C. consom., art. R. 212-4,
            V).
          </p>
          <Header />
          <Header>3. Validation de la commande</Header>
          <p>
            Le vendeur professionnel se réserve le droit de refuser toute
            commande pour des motifs légitimes.
          </p>
          <Header>Article 7- Contrat</Header>
          <Header>1. Conclusion</Header>
          <p>
            Le contrat de vente est formé au moment de l’envoi par le
            consommateur de la confirmation de sa commande.
          </p>
          <Header />
          <Header>2. Archivage et preuve</Header>
          <p>
            L’archivage des communications, des bons de commande et des factures
            est effectué sur un support fiable et durable de manière constituer
            une copie fidèle et durable conformément à l’article 1360 du code
            civil (ancien C. civ., art. 1348). Ces communications, bons de
            commande et factures peuvent être produits à titre de preuve du
            contrat.
          </p>
          <Header />
          <Header>3. Résolution</Header>
          <p>
            La commande peut être résolue par l’acheteur par lettre recommandée
            avec demande d’avis de réception ou par un écrit sur un autre
            support durable en cas : — de livraison d’un produit non conforme
            aux caractéristiques déclarées du produit ; — de livraison dépassant
            la date limite fixée dans le bon de commande ou, à défaut d’une
            telle date, dans les trente jours suivant la conclusion du contrat,
            après que le vendeur ait été enjoint, selon les mêmes modalités et
            sans résultat, d’effectuer la livraison dans un délai supplémentaire
            raisonnable ; — de hausse du prix qui n’est pas justifiée par une
            modification technique du produit imposée par les pouvoirs publics.
            Dans tous ces cas, l’acheteur peut exiger le remboursement de
            l’acompte versé majoré des intérêts calculés au taux légal à partir
            de la date d’encaissement de l’acompte. La commande peut être
            résolue par le vendeur en cas : — de refus de l’acheteur de prendre
            livraison ; — de non-paiement du prix (ou du solde du prix) au
            moment de la livraison. Dans tous ces cas, l’acompte versé à la
            commande reste acquis au vendeur à titre d’indemnité.
          </p>
          <Header>Article 8- Paiement</Header>
          <Header>1. Exigibilité</Header>
          <p>
            Le prix est exigible en totalité après confirmation de la commande.
            À l’exclusion des sommes versées qui sont remboursées en cas
            d’indisponibilité du produit commandé dans les conditions prévues à
            l’article 3-4 des CGV, toute somme versée d’avance sur le prix
            produit des intérêts au taux légal à l’expiration d’un délai de
            trois mois à compter du versement jusqu’à la livraison du produit
            ou, à défaut, à la restitution de la somme versée à la commande (C.
            consom., art. L. 214 et s. ; ancien C. consom., art. L. 131-1). Le
            paiement s’effectue immédiatement à la commande par carte bancaire
            ou de manière différée à la livraison, par prélèvement automatique,
            chèque ou virement bancaire.
          </p>
          <Header />
          <Header>2. Paiement supplémentaire</Header>
          <p>
            Article L. 121-18 du code de la consommation (ancien C. consom.,
            art. L. 114-1) Préalablement à la conclusion d’un contrat de vente
            ou de prestation de services, le professionnel s’assure du
            consentement exprès du consommateur pour tout paiement
            supplémentaire venant s’ajouter au prix de l’objet principal du
            contrat. Dans l’hypothèse où le paiement supplémentaire résulte d’un
            consentement du consommateur donné par défaut, c’est-à-dire en
            l’absence d’opposition expresse de sa part à des options payantes
            qu’il n’a pas sollicitées, le consommateur peut prétendre au
            remboursement des sommes versées au titre de ce paiement
            supplémentaire. Article L. 131-6 du code de la consommation (ancien
            C. consom., art. L. 114-2)
          </p>
          <Header />
          <Header>3. Sécurisation du paiement</Header>
          <p>
            Le site est doté d’un système de sécurisation des paiements en ligne
            permettant au consommateur de crypter la transmission de ses données
            bancaires
          </p>
          <Header />
          <Header>4. Retard de paiement</Header>
          <p>
            Toute somme non payée à l’échéance est productive, sans mise en
            demeure, d’un intérêt .
          </p>
          <Header />
          <Header>5. Défaut de paiement</Header>
          <p />
          Le vendeur se réserve le droit, lorsque le prix convenu n’est pas payé
          à l’échéance, soit de demander l’exécution de la vente, soit de
          résoudre le contrat par simple lettre recommandée avec demande d’avis
          de réception et de conserver, à titre d’indemnité, l’acompte versé à
          la commande.
          <Header>Article 9- Responsabilité Exonération de responsabilité</Header>
          <Header />
          <p>
            La responsabilité du vendeur professionnel ne peut pas être engagée
            en cas d’inexécution ou de mauvaise exécution du contrat due, soit
            au fait de l’acheteur, soit au fait insurmontable et imprévisible
            d’un tiers au contrat, soit à la force majeure.
          </p>
          <Header>Article 10 Clause résolutoire</Header>
          <Header />
          <p>
            La résolution de la commande dans les cas prévus aux présentes CGV
            sera prononcée par simple lettre recommandée avec demande d’avis de
            réception ou par lettre électronique et sera acquise de plein droit
            sans formalité judiciaire.
          </p>
          <Header>Article 11 Droit de rétractation</Header>
          <Header />
          <p>
            En application de l’article L. 221-28 du code de la consommation
            (ancien C. consom., art. L. 121-21-8), le client est informé du fait
            que le droit de rétractation ne peut être exercé pour certains
            contrats. Le délai de rétractation expire quatorze jours après le
            jour de la conclusion du contrat Pour exercer le droit de
            rétractation, vous devez nous notifier : ME DESABONNER — votre nom,
            votre adresse géographique et, lorsqu’ils sont disponibles, votre
            numéro de téléphone, votre numéro de télécopieur et votre adresse
            électronique ; — ainsi que votre décision de rétractation du contrat
            au moyen d’une déclaration dénuée d’ambiguïté (par exemple, lettre
            envoyée par la poste, télécopie ou courrier électronique dès lors
            que ces coordonnées sont disponibles et de ce fait apparaissent sur
            le formulaire type de rétractation). Vous pouvez utiliser le modèle
            de formulaire de rétractation mais ce n’est pas obligatoire. Vous
            pouvez également remplir et transmettre le modèle de formulaire de
            rétractation ou toute autre déclaration dénuée d’ambiguïté sur notre
            site Internet. Si vous utilisez cette option, nous vous enverrons
            sans délai un accusé de réception de la rétractation sur un support
            durable. Pour que le délai de rétractation de quatorze jours soit
            respecté, il suffit que vous transmettiez votre communication
            relative à l’exercice du droit de rétractation avant l’expiration de
            ce délai (pour des raisons de syntaxe, la formule de l’annexe à
            l’article R. 121-2 du code de la consommation n’est pas recopiée
            ici). Dans tous les cas, la charge de la preuve de cet exercice
            repose sur le client. Effets En cas de rétractation de votre part du
            contrat, nous vous rembourserons tous les paiements reçus de vous, y
            compris les frais de livraison (à l’exception des frais
            supplémentaires découlant du fait que vous avez choisi, le cas
            échéant, un mode de livraison autre que le mode moins coûteux de
            livraison standard que nous proposons) sans retard excessif et, en
            tout état de cause, au plus tard quatorze jours à compter du jour où
            nous serions informés de votre décision de rétractation du contrat
            éventuel. Nous procéderions au remboursement en utilisant le même
            moyen de paiement que celui que vous utiliseriez pour la transaction
            initiale. Avec votre accord exprès, un autre moyen peut être
            utilisé. En tout état de cause, ce remboursement n’occasionnerait
            pas de frais pour vous. Si le consommateur a reçu des biens dans le
            cadre d’un contrat dont il peut valablement se rétracter , il
            convient de recopier les paragraphes suivants, le cas échéant après
            avoir opté parmi les différentes possibilités : Il est rappelé que
            la responsabilité du client, en cas de rétractation après
            utilisation du ou des biens, est engagée à l’égard de la
            dépréciation du ou des biens résultant de manipulations autres que
            celles nécessaires pour établir la nature, les caractéristiques et
            le bon fonctionnement de ce ou ces biens. Selon la Commission
            européenne, ces manipulations sont celles qu’un consommateur peut
            effectuer dans un magasin, pour les biens qui y sont proposés à la
            vente.
          </p>
          <Header>Article 12- Propriété intellectuelle</Header>
          <Header />
          <p>
            Les éléments reproduits sur le présent site qui sont la propriété
            exclusive de l’éditeur, sont protégés par le droit d’auteur, le
            droit des marques et le droit des brevets. Toute reproduction et
            toute diffusion de ces éléments, sans autorisation écrite préalable
            de l’éditeur, exposent les contrevenants à des poursuites
            judiciaires.
          </p>
          <Header>Article 13- Traitement des données personnelles</Header>
          <Header />
          <p>
            Le traitement informatisé des données personnelles recueillies a
            pour finalité le repsct de la législation. Ces données transférées
            vers un État non membre de l’Union européenne. Conformément à la loi
            Informatique et Libertés, vous disposez d’un droit d’accès, de
            rectification et, sous réserves des dispositions légales applicables
            à la matière, de suppression des données vous concernant, le
            responsable du traitement étant Voir note d’aide . Si vous l’avez
            préalablement accepté, vous pourrez recevoir des emails ou des SMS
            marketing de Voir note d’aide dont vous pouvez vous désinscrire,
            pour les emails, en cliquant sur le lien de désinscription figurant
            au bas de chaque e-mail reçu et pour les SMS en cliquant sur STOP
            dans chaque SMS reçu.
          </p>
          <Header>Article 14- Médiation</Header>
          <Header>1. Réclamation préalable</Header>
          <p>
            Articles R. 221-2 et suivants du code de la consommation En cas de
            litige, vous devez vous adresser en priorité au service clientèle de
            l’entreprise au (numéro non surtaxé à partir d’une ligne fixe en
            France métropolitaine), du lundi au vendredi sauf jour férié ou
            chômé, ou par courrier électronique ou postal.
          </p>
          <Header />
          <Header>2. Demande de médiation</Header>
          <p>
            En cas d’échec de la demande de réclamation auprès du service
            consommateurs ou en l’absence de réponse de ce service dans un délai
            de deux mois, le consommateur peut soumettre le différend relatif au
            bon de commande ou aux présentes CGV l’opposant au vendeur
            professionnel
          </p>
          <Header>Article 15- Tribunal compétent</Header>
          <Header />
          <p>
            À défaut d’accord amiable, vous pouvez saisir le tribunal pour tout
            litige relatif à l’existence, l’interprétation, la conclusion,
            l’exécution ou la rupture du contrat ainsi que sur tous les
            documents connexes à ce contrat. Le tribunal compétent sera celui du
            lieu du domicile du défendeur (article 42 du code de procédure
            civile) ou celui du lieu de la livraison effective de la chose ou de
            l’exécution de la prestation de service (article 46 du code de
            procédure civile). À défaut d’accord amiable, vous pouvez saisir le
            tribunal pour tout litige relatif à l’existence, l’interprétation,
            la conclusion, l’exécution ou la rupture du contrat ainsi que sur
            tous les documents connexes à ce contrat. Le tribunal compétent sera
            celui du lieu du domicile du défendeur (article 42 du code de
            procédure civile) ou celui du lieu de la livraison effective de la
            chose ou de l’exécution de la prestation de service (article 46 du
            code de procédure civile).
          </p>
          <Header>Article 16- Droit applicable</Header>
          <Header />
          <p>
            Le présent contrat et les CGV le régissant sont soumis à la loi
            française.
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Fermer"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleModal;
