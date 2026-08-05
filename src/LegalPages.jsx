import { useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "./Seo";

/* ─────────────────────────────────────────
   CONTENU LÉGAL – FR / EN / ES
───────────────────────────────────────── */
const legal = {
  fr: {
    tabs: {
      ml:  "Mentions légales",
      cgv: "CGV",
      pc:  "Politique de confidentialité",
    },
    back: "Retour au site",
    ml: {
      title: "Mentions légales",
      updated: "Mise à jour : mai 2026",
      sections: [
        {
          heading: "1. Éditeur du site",
          box: [
            ["Société", "SOC TRADE BULGARIA EOOD"],
            ["Translitération", "SOC TRADE BULGARIA"],
            ["Forme juridique", "EOOD (SARL Unipersonnelle de droit bulgare)"],
            ["EIK", "208209146"],
            ["Date d'immatriculation", "11 mars 2025"],
            ["Siège social", "64 rue Maragidik, entrée A, arrondissement Poduyane, Sofia 1505, Bulgarie"],
            ["Gérant", "Simon Henri Beltran (ressortissant français)"],
            ["Capital social", "1 022 €"],
            ["TVA", "Non assujetti"],
            ["Email", "contact@reussir-sofia.fr"],
          ],
        },
        {
          heading: "2. Hébergement",
          text: "L'hébergeur du site sera précisé lors de la mise en ligne. Pour toute question : contact@reussir-sofia.fr.",
        },
        {
          heading: "3. Directeur de la publication",
          text: "Simon Henri Beltran, gérant de SOC TRADE BULGARIA EOOD.",
        },
        {
          heading: "4. Activité",
          text: "Réussir à Sofia est un service d'accompagnement administratif pour l'expatriation en Bulgarie. La société n'est pas un cabinet d'avocats, un cabinet notarial, ni un prestataire de services réglementés. Pour les démarches nécessitant l'intervention d'un professionnel réglementé, la société oriente ses clients vers ses partenaires habilités.",
        },
        {
          heading: "5. Propriété intellectuelle",
          text: "L'ensemble des contenus du site (textes, visuels, structure, marque Réussir à Sofia) est la propriété de SOC TRADE BULGARIA EOOD. Toute reproduction, même partielle, sans autorisation écrite préalable est interdite.",
        },
        {
          heading: "6. Limitation de responsabilité",
          text: "Les informations publiées sur ce site sont données à titre indicatif. SOC TRADE BULGARIA EOOD ne saurait être tenue responsable d'erreurs, d'omissions, ou de l'utilisation qui pourrait être faite de ces informations. Le droit applicable est le droit bulgare.",
        },
        {
          heading: "7. Médiation et règlement des litiges",
          text: "En cas de litige non résolu amiablement, le client résidant dans l'Union européenne peut recourir à la plateforme ODR de la Commission européenne : https://ec.europa.eu/consumers/odr. Le tribunal compétent est celui de Sofia, Bulgarie.",
        },
      ],
    },
    cgv: {
      title: "Conditions Générales de Vente",
      updated: "En vigueur : mai 2026",
      sections: [
        {
          heading: "1. Objet",
          text: "Les présentes CGV régissent les relations contractuelles entre SOC TRADE BULGARIA EOOD (« le Prestataire ») et toute personne qui commande une prestation d'accompagnement (« le Client »).",
        },
        {
          heading: "2. Prestations proposées",
          table: {
            headers: ["Formule", "Prix public TTC"],
            rows: [
              ["Découverte Sofia", "250 €"],
              ["Installation Bulgarie", "650 €"],
              ["Expat Business", "1 490 €"],
            ],
          },
          text: "Des options à la carte et des prestations sur mesure sont disponibles. Prix en euros, TVA non applicable.",
        },
        {
          heading: "3. Commande et acceptation",
          text: "Toute commande est formalisée par l'envoi d'un devis signé par le Client et du règlement de l'acompte de 30 %. La signature du devis vaut acceptation des présentes CGV.",
        },
        {
          heading: "4. Modalités de paiement",
          list: [
            "Acompte de 30 % à la signature du devis.",
            "Solde de 70 % au démarrage effectif de la prestation.",
            "Modes de paiement : virement bancaire SEPA, paiement en ligne sécurisé.",
            "Facture émise par SOC TRADE BULGARIA EOOD (EIK 208209146).",
          ],
        },
        {
          heading: "5. Frais tiers",
          text: "Les honoraires d'avocat, de comptable, les frais de constitution d'EOOD, les taxes administratives bulgares et les traductions assermentées sont facturés séparément et directement par les prestataires concernés. Ces montants ne sont pas inclus dans les tarifs du Prestataire.",
        },
        {
          heading: "6. Droit de rétractation",
          text: "Le Client dispose de 14 jours calendaires à compter de la signature du devis pour exercer son droit de rétractation, par écrit à contact@reussir-sofia.fr. Ce droit ne s'applique pas si la prestation a débuté à la demande expresse du Client avant l'expiration du délai.",
        },
        {
          heading: "7. Annulation et remboursement",
          list: [
            "Annulation > 14 jours avant démarrage : remboursement intégral de l'acompte.",
            "Annulation 7–14 jours avant : remboursement de 50 % de l'acompte.",
            "Annulation < 7 jours avant : acompte conservé à titre d'indemnité.",
          ],
        },
        {
          heading: "8. Obligations du Prestataire",
          text: "Le Prestataire est soumis à une obligation de moyens, et non de résultat, notamment concernant les délais administratifs bulgares.",
        },
        {
          heading: "9. Obligations du Client",
          text: "Le Client s'engage à fournir en temps utile tous les documents nécessaires. Le Prestataire ne saurait être tenu responsable des retards imputables au Client.",
        },
        {
          heading: "10. Responsabilité",
          text: "La responsabilité du Prestataire est limitée au montant de la prestation effectivement réglée. Le Prestataire n'est pas responsable des décisions administratives des autorités bulgares.",
        },
        {
          heading: "11. Loi applicable et juridiction",
          text: "Les présentes CGV sont soumises au droit bulgare. En cas de litige non résolu amiablement, le tribunal compétent est celui de Sofia, Bulgarie.",
        },
      ],
      disclaimer: "⚖️ Réussir à Sofia est une société d'accompagnement administratif. Nous ne sommes ni avocats ni notaires : pour les actes nécessitant une expertise réglementée, nous vous mettons en relation avec nos partenaires habilités.",
    },
    pc: {
      title: "Politique de confidentialité",
      updated: "Mise à jour : mai 2026",
      sections: [
        {
          heading: "1. Responsable du traitement",
          box: [
            ["Société", "SOC TRADE BULGARIA EOOD — EIK 208209146"],
            ["Adresse", "64 rue Maragidik, entrée A, arrondissement Poduyane, Sofia 1505, Bulgarie"],
            ["Email", "contact@reussir-sofia.fr"],
          ],
        },
        {
          heading: "2. Données collectées",
          list: [
            "Données d'identification : nom, prénom, nationalité, date de naissance.",
            "Coordonnées : adresse e-mail, numéro de téléphone, adresse postale.",
            "Données contractuelles : devis, factures, paiements.",
            "Données de navigation : adresse IP, cookies techniques.",
            "Documents administratifs transmis dans le cadre de la prestation.",
          ],
        },
        {
          heading: "3. Finalités et bases légales",
          table: {
            headers: ["Finalité", "Base légale"],
            rows: [
              ["Exécution des prestations", "Exécution du contrat"],
              ["Émission de devis et factures", "Obligation légale / Contrat"],
              ["Communication commerciale", "Consentement"],
              ["Gestion des réclamations", "Intérêt légitime"],
            ],
          },
        },
        {
          heading: "4. Destinataires des données",
          text: "Vos données ne sont jamais vendues. Elles peuvent être partagées avec nos partenaires habilités (avocat, comptable) dans le cadre strict de votre dossier, les autorités administratives bulgares si requis, et nos prestataires techniques soumis à des obligations de confidentialité.",
        },
        {
          heading: "5. Durée de conservation",
          list: [
            "Données contractuelles et comptables : 10 ans (obligation légale bulgare).",
            "Données de prospection : 3 ans à compter du dernier contact.",
            "Documents administratifs : supprimés après clôture du dossier, sauf obligation légale.",
          ],
        },
        {
          heading: "6. Vos droits (RGPD)",
          text: "Vous disposez des droits d'accès, rectification, effacement, limitation, portabilité et opposition. Pour les exercer : contact@reussir-sofia.fr. En cas de réponse insatisfaisante, vous pouvez saisir la CPDP bulgare (www.cpdp.bg).",
        },
        {
          heading: "7. Cookies",
          text: "Le site peut utiliser des cookies techniques strictement nécessaires. Aucun cookie publicitaire ou de traçage n'est utilisé sans votre consentement explicite.",
        },
        {
          heading: "8. Sécurité & transferts",
          text: "Vos données sont traitées au sein de l'UE (Bulgarie). Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour les protéger. Aucun transfert hors UE sans garanties adéquates.",
        },
      ],
    },
  },

  en: {
    tabs: {
      ml:  "Legal Notice",
      cgv: "Terms & Conditions",
      pc:  "Privacy Policy",
    },
    back: "Back to site",
    ml: {
      title: "Legal Notice",
      updated: "Last updated: May 2026",
      sections: [
        {
          heading: "1. Publisher",
          box: [
            ["Company", "SOC TRADE BULGARIA EOOD"],
            ["Legal form", "EOOD (Single-member LLC under Bulgarian law)"],
            ["EIK", "208209146"],
            ["Registration date", "11 March 2025"],
            ["Registered office", "64 Maragidik Street, Entrance A, Poduyane district, Sofia 1505, Bulgaria"],
            ["Manager", "Simon Henri Beltran (French national)"],
            ["Share capital", "€1,022"],
            ["VAT", "Not registered"],
            ["Email", "contact@reussir-sofia.fr"],
          ],
        },
        {
          heading: "2. Hosting",
          text: "Hosting provider details will be published upon website launch. Contact: contact@reussir-sofia.fr.",
        },
        {
          heading: "3. Publication Director",
          text: "Simon Henri Beltran, Manager of SOC TRADE BULGARIA EOOD.",
        },
        {
          heading: "4. Activity",
          text: "Réussir à Sofia provides administrative support for expatriation to Bulgaria. The company is not a law firm, notarial office, or regulated service provider. For matters requiring a regulated professional, clients are referred to licensed partners.",
        },
        {
          heading: "5. Intellectual Property",
          text: "All website content (text, visuals, structure, brand Réussir à Sofia) is owned by SOC TRADE BULGARIA EOOD. Any reproduction without prior written consent is prohibited.",
        },
        {
          heading: "6. Limitation of Liability",
          text: "Information on this site is for guidance only. SOC TRADE BULGARIA EOOD is not liable for errors, omissions, or use of such information. Applicable law is Bulgarian law.",
        },
        {
          heading: "7. Dispute Resolution",
          text: "EU-resident clients may use the EC's ODR platform: https://ec.europa.eu/consumers/odr. Jurisdiction: courts of Sofia, Bulgaria.",
        },
      ],
    },
    cgv: {
      title: "Terms and Conditions of Sale",
      updated: "Effective: May 2026",
      sections: [
        {
          heading: "1. Purpose",
          text: "These Terms govern the contractual relationship between SOC TRADE BULGARIA EOOD ('the Provider') and any person ordering a support service ('the Client').",
        },
        {
          heading: "2. Services",
          table: {
            headers: ["Package", "Price (incl. taxes)"],
            rows: [
              ["Sofia Discovery", "€250"],
              ["Bulgaria Move-in", "€650"],
              ["Business Expat", "€1,490"],
            ],
          },
          text: "À la carte options and custom services are available. Prices in euros, VAT not applicable.",
        },
        {
          heading: "3. Order & Acceptance",
          text: "Orders are formalised by the Client signing a quote and paying the 30% deposit. Signing constitutes acceptance of these Terms.",
        },
        {
          heading: "4. Payment Terms",
          list: [
            "30% deposit upon signing the quote.",
            "70% balance upon commencement of the service.",
            "Accepted: SEPA bank transfer, secure online payment.",
            "Invoice issued by SOC TRADE BULGARIA EOOD (EIK 208209146).",
          ],
        },
        {
          heading: "5. Third-Party Fees",
          text: "Lawyer fees, accountant fees, EOOD formation costs, Bulgarian administrative taxes, and sworn translations are billed separately by the relevant providers and are not included in the Provider's prices.",
        },
        {
          heading: "6. Right of Withdrawal",
          text: "The Client has 14 calendar days from signing the quote to withdraw, in writing to contact@reussir-sofia.fr. This right does not apply if the service has commenced at the Client's express request.",
        },
        {
          heading: "7. Cancellation & Refunds",
          list: [
            "Cancellation > 14 days before start: full deposit refund.",
            "Cancellation 7–14 days before: 50% deposit refund.",
            "Cancellation < 7 days before: deposit retained as compensation.",
          ],
        },
        {
          heading: "8. Provider's Obligations",
          text: "The Provider is bound by a best-efforts obligation, not a results obligation, particularly regarding Bulgarian administrative timelines.",
        },
        {
          heading: "9. Client's Obligations",
          text: "The Client must provide all necessary documents in a timely manner. The Provider is not liable for delays attributable to the Client.",
        },
        {
          heading: "10. Liability",
          text: "The Provider's liability is limited to the amount of the service paid. The Provider is not responsible for decisions made by Bulgarian administrative authorities.",
        },
        {
          heading: "11. Governing Law",
          text: "These Terms are governed by Bulgarian law. Jurisdiction: courts of Sofia, Bulgaria.",
        },
      ],
      disclaimer: "⚖️ Réussir à Sofia is an administrative support company. We are not lawyers or notaries. For matters requiring regulated expertise, we connect clients with our licensed partners.",
    },
    pc: {
      title: "Privacy Policy",
      updated: "Last updated: May 2026",
      sections: [
        {
          heading: "1. Data Controller",
          box: [
            ["Company", "SOC TRADE BULGARIA EOOD — EIK 208209146"],
            ["Address", "64 Maragidik Street, Entrance A, Poduyane district, Sofia 1505, Bulgaria"],
            ["Email", "contact@reussir-sofia.fr"],
          ],
        },
        {
          heading: "2. Data Collected",
          list: [
            "Identity data: name, surname, nationality, date of birth.",
            "Contact details: email, phone number, postal address.",
            "Contractual data: quotes, invoices, payments.",
            "Browsing data: IP address, technical cookies.",
            "Administrative documents provided during the service.",
          ],
        },
        {
          heading: "3. Purposes & Legal Bases",
          table: {
            headers: ["Purpose", "Legal Basis"],
            rows: [
              ["Delivery of services", "Contract performance"],
              ["Quotes and invoices", "Legal obligation / Contract"],
              ["Commercial communication", "Consent"],
              ["Complaint management", "Legitimate interest"],
            ],
          },
        },
        {
          heading: "4. Data Recipients",
          text: "Your data is never sold. It may be shared with licensed partners (lawyer, accountant) within the scope of your file, Bulgarian administrative authorities when required, and technical providers subject to confidentiality obligations.",
        },
        {
          heading: "5. Retention",
          list: [
            "Contractual and accounting data: 10 years (Bulgarian legal obligation).",
            "Prospecting data: 3 years from last contact.",
            "Administrative documents: deleted after case closure, unless legally required.",
          ],
        },
        {
          heading: "6. Your Rights (GDPR)",
          text: "You have rights of access, rectification, erasure, restriction, portability, and objection. Contact: contact@reussir-sofia.fr. You may also lodge a complaint with the Bulgarian CPDP (www.cpdp.bg).",
        },
        {
          heading: "7. Cookies",
          text: "The site may use strictly necessary technical cookies. No advertising or tracking cookies without explicit consent.",
        },
        {
          heading: "8. Security & Transfers",
          text: "Your data is processed within the EU (Bulgaria). Appropriate measures protect it. No transfers outside the EU without adequate safeguards.",
        },
      ],
    },
  },

  es: {
    tabs: {
      ml:  "Aviso Legal",
      cgv: "Condiciones de Venta",
      pc:  "Política de Privacidad",
    },
    back: "Volver al sitio",
    ml: {
      title: "Aviso Legal",
      updated: "Última actualización: mayo de 2026",
      sections: [
        {
          heading: "1. Editor del sitio",
          box: [
            ["Sociedad", "SOC TRADE BULGARIA EOOD"],
            ["Forma jurídica", "EOOD (SRL Unipersonal de derecho búlgaro)"],
            ["EIK", "208209146"],
            ["Fecha de registro", "11 de marzo de 2025"],
            ["Domicilio social", "Calle Maragidik 64, Entrada A, Distrito Poduyane, Sofía 1505, Bulgaria"],
            ["Gerente", "Simon Henri Beltran (ciudadano francés)"],
            ["Capital social", "1.022 €"],
            ["IVA", "No inscrito"],
            ["Email", "contact@reussir-sofia.fr"],
          ],
        },
        {
          heading: "2. Alojamiento web",
          text: "Los datos del proveedor de alojamiento se publicarán con el lanzamiento del sitio. Contacto: contact@reussir-sofia.fr.",
        },
        {
          heading: "3. Director de publicación",
          text: "Simon Henri Beltran, gerente de SOC TRADE BULGARIA EOOD.",
        },
        {
          heading: "4. Actividad",
          text: "Réussir à Sofia presta servicios de acompañamiento administrativo para la expatriación en Bulgaria. La empresa no es un despacho de abogados, una notaría ni un proveedor de servicios regulados. Para los trámites que requieran un profesional regulado, los clientes son dirigidos hacia colaboradores habilitados.",
        },
        {
          heading: "5. Propiedad intelectual",
          text: "Todos los contenidos del sitio son propiedad de SOC TRADE BULGARIA EOOD. Queda prohibida su reproducción, incluso parcial, sin autorización escrita previa.",
        },
        {
          heading: "6. Limitación de responsabilidad",
          text: "La información publicada tiene carácter orientativo. SOC TRADE BULGARIA EOOD no se responsabiliza de errores u omisiones. La ley aplicable es el derecho búlgaro.",
        },
        {
          heading: "7. Resolución de litigios",
          text: "Los clientes de la UE pueden recurrir a la plataforma ODR: https://ec.europa.eu/consumers/odr. Tribunales competentes: Sofía, Bulgaria.",
        },
      ],
    },
    cgv: {
      title: "Condiciones Generales de Venta",
      updated: "En vigor desde: mayo de 2026",
      sections: [
        {
          heading: "1. Objeto",
          text: "Las presentes CGV regulan las relaciones entre SOC TRADE BULGARIA EOOD («el Prestador») y cualquier persona que contrate un servicio de acompañamiento («el Cliente»).",
        },
        {
          heading: "2. Servicios",
          table: {
            headers: ["Paquete", "Precio (IVA incl.)"],
            rows: [
              ["Descubrimiento Sofía", "250 €"],
              ["Instalación Bulgaria", "650 €"],
              ["Expat Business", "1.490 €"],
            ],
          },
          text: "También se ofrecen opciones a la carta y servicios a medida. Precios en euros, IVA no aplicable.",
        },
        {
          heading: "3. Pedido y aceptación",
          text: "Todo pedido se formaliza mediante la firma del presupuesto y el abono del anticipo del 30 %. La firma implica aceptación de las presentes CGV.",
        },
        {
          heading: "4. Modalidades de pago",
          list: [
            "Anticipo del 30 % a la firma del presupuesto.",
            "Saldo del 70 % al inicio del servicio.",
            "Métodos aceptados: transferencia SEPA, pago en línea seguro.",
            "Factura emitida por SOC TRADE BULGARIA EOOD (EIK 208209146).",
          ],
        },
        {
          heading: "5. Gastos de terceros",
          text: "Honorarios de abogado, contable, gastos de constitución de EOOD, tasas administrativas y traducciones juradas se facturan aparte por los prestadores correspondientes y no están incluidos en los precios del Prestador.",
        },
        {
          heading: "6. Derecho de desistimiento",
          text: "El Cliente dispone de 14 días naturales desde la firma del presupuesto para desistir, por escrito a contact@reussir-sofia.fr. Este derecho no aplica si el servicio ha comenzado a petición expresa del Cliente.",
        },
        {
          heading: "7. Cancelación y reembolso",
          list: [
            "Cancelación > 14 días antes: reembolso íntegro del anticipo.",
            "Cancelación 7–14 días antes: reembolso del 50 % del anticipo.",
            "Cancelación < 7 días antes: anticipo retenido como compensación.",
          ],
        },
        {
          heading: "8. Obligaciones del Prestador",
          text: "El Prestador está sujeto a una obligación de medios, no de resultado, especialmente en cuanto a los plazos administrativos búlgaros.",
        },
        {
          heading: "9. Obligaciones del Cliente",
          text: "El Cliente debe facilitar todos los documentos necesarios a tiempo. El Prestador no es responsable de los retrasos imputables al Cliente.",
        },
        {
          heading: "10. Responsabilidad",
          text: "La responsabilidad del Prestador se limita al importe del servicio abonado. No es responsable de las decisiones de las autoridades administrativas búlgaras.",
        },
        {
          heading: "11. Ley aplicable",
          text: "Las presentes CGV se rigen por el derecho búlgaro. Jurisdicción competente: tribunales de Sofía, Bulgaria.",
        },
      ],
      disclaimer: "⚖️ Réussir à Sofia es una empresa de acompañamiento administrativo. No somos abogados ni notarios. Para los actos que requieran competencia regulada, ponemos a los clientes en contacto con nuestros colaboradores habilitados.",
    },
    pc: {
      title: "Política de Privacidad",
      updated: "Última actualización: mayo de 2026",
      sections: [
        {
          heading: "1. Responsable del tratamiento",
          box: [
            ["Sociedad", "SOC TRADE BULGARIA EOOD — EIK 208209146"],
            ["Dirección", "Calle Maragidik 64, Entrada A, Distrito Poduyane, Sofía 1505, Bulgaria"],
            ["Email", "contact@reussir-sofia.fr"],
          ],
        },
        {
          heading: "2. Datos recogidos",
          list: [
            "Datos de identificación: nombre, apellidos, nacionalidad, fecha de nacimiento.",
            "Datos de contacto: email, teléfono, dirección postal.",
            "Datos contractuales: presupuestos, facturas, pagos.",
            "Datos de navegación: dirección IP, cookies técnicas.",
            "Documentos administrativos facilitados en el marco del servicio.",
          ],
        },
        {
          heading: "3. Finalidades y bases legales",
          table: {
            headers: ["Finalidad", "Base legal"],
            rows: [
              ["Prestación de servicios", "Ejecución del contrato"],
              ["Presupuestos y facturas", "Obligación legal / Contrato"],
              ["Comunicación comercial", "Consentimiento"],
              ["Gestión de reclamaciones", "Interés legítimo"],
            ],
          },
        },
        {
          heading: "4. Destinatarios",
          text: "Sus datos nunca se venden. Pueden compartirse con colaboradores habilitados (abogado, contable) en el marco de su expediente, autoridades búlgaras si es necesario, y proveedores técnicos sujetos a confidencialidad.",
        },
        {
          heading: "5. Plazos de conservación",
          list: [
            "Datos contractuales y contables: 10 años (obligación legal búlgara).",
            "Datos de prospección: 3 años desde el último contacto.",
            "Documentos administrativos: eliminados tras el cierre del expediente, salvo obligación legal.",
          ],
        },
        {
          heading: "6. Sus derechos (RGPD)",
          text: "Dispone de derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición. Contacto: contact@reussir-sofia.fr. También puede reclamar ante la CPDP búlgara (www.cpdp.bg).",
        },
        {
          heading: "7. Cookies",
          text: "El sitio puede usar cookies técnicas estrictamente necesarias. No se utilizan cookies publicitarias ni de rastreo sin consentimiento explícito.",
        },
        {
          heading: "8. Seguridad y transferencias",
          text: "Sus datos se tratan dentro de la UE (Bulgaria). Se adoptan medidas adecuadas para protegerlos. No se realizan transferencias fuera de la UE sin garantías apropiadas.",
        },
      ],
    },
  },
};

/* ─────────────────────────────────────────
   SOUS-COMPOSANTS
───────────────────────────────────────── */

function InfoBox({ rows }) {
  return (
    <div className="bg-[#EDE4D0] border-l-4 border-[#C8985C] rounded-r-xl p-5 md:p-6 my-5">
      <dl className="space-y-2">
        {rows.map(([label, value], i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:gap-4 text-sm">
            <dt className="font-semibold text-[#2C2620] sm:w-44 flex-shrink-0">{label}</dt>
            <dd className="text-[#3D3528]">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto my-5 rounded-xl border border-[#3D352815]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#EDE4D0]">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-5 py-3 font-semibold text-[#2C2620]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-[#3D352810] hover:bg-[#F5EFE0]/60 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-5 py-3 text-[#3D3528] ${j === row.length - 1 ? "font-semibold text-[#6B7F4A]" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Section({ section }) {
  return (
    <div className="border-b border-[#3D352815] pb-8 mb-8 last:border-none last:mb-0">
      <h2 className="font-display text-xl md:text-2xl font-semibold text-[#2C2620] mb-4">
        {section.heading}
      </h2>
      {section.box && <InfoBox rows={section.box} />}
      {section.text && (
        <p className="text-[#3D3528] leading-relaxed text-sm md:text-base">{section.text}</p>
      )}
      {section.table && (
        <DataTable headers={section.table.headers} rows={section.table.rows} />
      )}
      {section.list && (
        <ul className="space-y-2 mt-2">
          {section.list.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[#3D3528]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6B7F4A] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {section.table && section.text && (
        <p className="mt-3 text-sm text-[#3D3528] leading-relaxed">{section.text}</p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   COMPOSANT PRINCIPAL
───────────────────────────────────────── */
export default function LegalPages() {
  const [lang, setLang]   = useState("fr");
  const [doc, setDoc]     = useState("ml");
  const t = legal[lang];
  const content = t[doc];

  const docKeys = ["ml", "cgv", "pc"];

  return (
    <div
      className="min-h-screen bg-[#F5EFE0] text-[#2C2620]"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      <Seo
        title="Mentions légales, CGV & confidentialité · Réussir à Sofia"
        description="Mentions légales, conditions générales de vente et politique de confidentialité de Réussir à Sofia — SOC TRADE BULGARIA EOOD, Sofia, Bulgarie."
        canonical="https://reussir-sofia.fr/legal"
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', Georgia, serif; }
      `}</style>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40 bg-[#2C2620] text-[#F5EFE0]">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
          {/* Logo + back */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-[#F5EFE0]/60 hover:text-[#C8985C] transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{t.back}</span>
            </Link>
            <div className="w-px h-5 bg-[#F5EFE0]/20" />
            <span className="font-display text-lg font-semibold">
              Réussir<span className="text-[#C8985C]">·</span>Sofia
            </span>
          </div>

          {/* Lang switcher */}
          <div className="flex items-center bg-[#F5EFE0]/10 rounded-full p-1 text-xs font-bold">
            {["fr", "en", "es"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 rounded-full uppercase transition-all ${
                  lang === l
                    ? "bg-[#6B7F4A] text-[#F5EFE0]"
                    : "text-[#F5EFE0]/60 hover:text-[#F5EFE0]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ── DOC TABS ── */}
      <div className="bg-[#EDE4D0] border-b border-[#3D352815] overflow-x-auto">
        <div className="max-w-4xl mx-auto px-5 md:px-8 flex">
          {docKeys.map((key) => (
            <button
              key={key}
              onClick={() => setDoc(key)}
              className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${
                doc === key
                  ? "border-[#6B7F4A] text-[#6B7F4A]"
                  : "border-transparent text-[#3D352880] hover:text-[#3D3528]"
              }`}
            >
              {t.tabs[key]}
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <main className="max-w-4xl mx-auto px-5 md:px-8 py-12 md:py-16">
        {/* Page title */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C8985C] font-bold mb-3">
            {t.tabs[doc]}
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-light text-[#2C2620] leading-tight">
            {content.title}
          </h1>
          <p className="mt-3 text-sm text-[#3D352870]">{content.updated}</p>
          <div className="mt-6 h-px bg-gradient-to-r from-[#6B7F4A40] via-[#C8985C40] to-transparent" />
        </div>

        {/* Sections */}
        <div>
          {content.sections.map((section, i) => (
            <Section key={i} section={section} />
          ))}
        </div>

        {/* Disclaimer (CGV only) */}
        {content.disclaimer && (
          <div className="mt-8 bg-[#EDE4D0] border border-[#3D352815] rounded-xl p-5 text-xs text-[#3D352899] leading-relaxed">
            {content.disclaimer}
          </div>
        )}
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#2C2620] text-[#F5EFE0]/50 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center text-xs space-y-1">
          <div>
            <span className="font-display text-[#F5EFE0]/80 font-semibold">
              Réussir<span className="text-[#C8985C]">·</span>Sofia
            </span>
            {" "}— SOC TRADE BULGARIA EOOD · EIK 208209146
          </div>
          <div>contact@reussir-sofia.fr</div>
          <div className="text-[#F5EFE0]/30">© 2026 · Tous droits réservés</div>
        </div>
      </footer>
    </div>
  );
}