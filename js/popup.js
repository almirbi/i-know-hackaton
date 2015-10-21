// load dependencies
var iframe = document.getElementById('search-results');

var dummy = {
	"result" : [
		{
			"facets" : {
				"provider" : "Europeana",
				"language" : "de"
			},
			"previewImage" : "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fadore-djatoka%2Fresolver%3Furl_ver%3DZ39.88-2004%26svc_id%3Dinfo%3Alanl-repo%2Fsvc%2FgetRegion%26svc_val_fmt%3Dinfo%3Aofi%2Ffmt%3Akev%3Amtx%3Ajpeg2000%26svc.format%3Dimage%2Fjpeg%26svc.scale%3D1024%2C0%26rft_id%3DC3940_h&size=LARGE&type=IMAGE",
			"id" : "/11601/_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949",
			"eexcessURI" : "http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&provider=OpenUp%21&id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&profile=standard",
			"title" : "Krumenzelkalk",
			"rdf" : "<rdf:RDF\r\n    xmlns:skos=\"http://www.w3.org/2004/02/skos/core#\"\r\n    xmlns:radion=\"http://www.w3.org/ns/radion#\"\r\n    xmlns:eexcess=\"http://eexcess.eu/schema/\"\r\n    xmlns:edm=\"http://www.europeana.eu/schemas/edm/\"\r\n    xmlns:adms=\"http://www.w3.org/ns/adms#\"\r\n    xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n    xmlns:voaf=\"http://purl.org/vocommons/voaf#\"\r\n    xmlns:vann=\"http://purl.org/vocab/vann/\"\r\n    xmlns:crm=\"http://www.cidoc-crm.org/cidoc-crm/\"\r\n    xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n    xmlns:j.0=\"http://www.cidoc-crm.org/rdfs/cidoc-crm#\"\r\n    xmlns:foaf=\"http://xmlns.com/foaf/0.1/\"\r\n    xmlns:frbr_core=\"http://purl.org/vocab/frbr/core#\"\r\n    xmlns:owl=\"http://www.w3.org/2002/07/owl#\"\r\n    xmlns:dcterms=\"http://purl.org/dc/terms/\"\r\n    xmlns:ore=\"http://www.openarchives.org/ore/terms/\"\r\n    xmlns:abc=\"http://metadata.net/harmony/abc#\"\r\n    xmlns:xsd=\"http://www.w3.org/2001/XMLSchema#\"\r\n    xmlns:dcam=\"http://purl.org/dc/dcam/\"\r\n    xmlns:DOLCE-Lite=\"http://www.loa-cnr.it/ontologies/DOLCE-Lite.owl#\"\r\n    xmlns:rdfg=\"http://www.w3.org/2004/03/trix/rdfg-1/\"\r\n    xmlns:frbroo=\"http://iflastandards.info/ns/fr/frbr/frbroo/\"\r\n    xmlns:dctype=\"http://purl.org/dc/dcmitype/\"\r\n    xmlns:rdfs=\"http://www.w3.org/2000/01/rdf-schema#\"\r\n    xmlns:wgs84_pos=\"http://www.w3.org/2003/01/geo/wgs84_pos#\">\r\n  <rdfs:Resource rdf:about=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard/proxy/\">\r\n    <ore:proxyIn>\r\n      <dctype:Collection rdf:about=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard/aggregation/\">\r\n        <edm:isShownBy rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard/webresource/\"/>\r\n        <dcterms:hasPart rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard\"/>\r\n        <edm:rights rdf:resource=\"http://creativecommons.org/publicdomain/mark/1.0/\"/>\r\n        <edm:dataProvider rdf:resource=\"http://www.europeana.eu/\"/>\r\n        <dcterms:provenance rdf:resource=\"http://www.europeana.eu/\"/>\r\n        <dcterms:hasPart rdf:resource=\"http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fadore-djatoka%2Fresolver%3Furl_ver%3DZ39.88-2004%26svc_id%3Dinfo%3Alanl-repo%2Fsvc%2FgetRegion%26svc_val_fmt%3Dinfo%3Aofi%2Ffmt%3Akev%3Amtx%3Ajpeg2000%26svc.format%3Dimage%2Fjpeg%26svc.scale%3D1024%2C0%26rft_id%3DC3940_h&amp;size=LARGE&amp;type=IMAGE\"/>\r\n        <edm:collectionName>11601_Ag_EU_OpenUp!_NHMV</edm:collectionName>\r\n        <rdf:type rdf:resource=\"http://www.w3.org/2000/01/rdf-schema#Resource\"/>\r\n        <ore:aggregates rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard/webresource/\"/>\r\n        <ore:aggregates rdf:resource=\"http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fadore-djatoka%2Fresolver%3Furl_ver%3DZ39.88-2004%26svc_id%3Dinfo%3Alanl-repo%2Fsvc%2FgetRegion%26svc_val_fmt%3Dinfo%3Aofi%2Ffmt%3Akev%3Amtx%3Ajpeg2000%26svc.format%3Dimage%2Fjpeg%26svc.scale%3D1024%2C0%26rft_id%3DC3940_h&amp;size=LARGE&amp;type=IMAGE\"/>\r\n        <rdf:type rdf:resource=\"http://www.openarchives.org/ore/terms/Aggregation\"/>\r\n        <edm:preview rdf:resource=\"http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fadore-djatoka%2Fresolver%3Furl_ver%3DZ39.88-2004%26svc_id%3Dinfo%3Alanl-repo%2Fsvc%2FgetRegion%26svc_val_fmt%3Dinfo%3Aofi%2Ffmt%3Akev%3Amtx%3Ajpeg2000%26svc.format%3Dimage%2Fjpeg%26svc.scale%3D1024%2C0%26rft_id%3DC3940_h&amp;size=LARGE&amp;type=IMAGE\"/>\r\n        <rdf:type>\r\n          <rdfs:Resource rdf:nodeID=\"A0\">\r\n            <rdf:type rdf:resource=\"http://www.w3.org/2002/07/owl#Class\"/>\r\n            <owl:unionOf>\r\n              <rdfs:Resource>\r\n                <rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#List\"/>\r\n                <rdf:first rdf:resource=\"http://www.europeana.eu/schemas/edm/ProvidedCHO\"/>\r\n                <rdf:rest>\r\n                  <rdfs:Resource>\r\n                    <rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#List\"/>\r\n                    <rdf:first>\r\n                      <owl:Class>\r\n                        <owl:intersectionOf>\r\n                          <rdfs:Resource>\r\n                            <rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#List\"/>\r\n                            <rdf:first rdf:resource=\"http://www.openarchives.org/ore/terms/Proxy\"/>\r\n                            <rdf:rest>\r\n                              <rdfs:Resource>\r\n                                <rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#List\"/>\r\n                                <rdf:first>\r\n                                  <owl:Restriction>\r\n                                    <owl:onProperty rdf:resource=\"http://www.openarchives.org/ore/terms/proxyFor\"/>\r\n                                    <owl:someValuesFrom rdf:resource=\"http://www.europeana.eu/schemas/edm/ProvidedCHO\"/>\r\n                                  </owl:Restriction>\r\n                                </rdf:first>\r\n                                <rdf:rest rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#nil\"/>\r\n                              </rdfs:Resource>\r\n                            </rdf:rest>\r\n                          </rdfs:Resource>\r\n                        </owl:intersectionOf>\r\n                      </owl:Class>\r\n                    </rdf:first>\r\n                    <rdf:rest rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#nil\"/>\r\n                  </rdfs:Resource>\r\n                </rdf:rest>\r\n              </rdfs:Resource>\r\n            </owl:unionOf>\r\n            <rdf:type rdf:resource=\"http://www.w3.org/2000/01/rdf-schema#Class\"/>\r\n            <rdfs:subClassOf rdf:nodeID=\"A0\"/>\r\n            <rdfs:subClassOf rdf:resource=\"http://www.w3.org/2000/01/rdf-schema#Resource\"/>\r\n          </rdfs:Resource>\r\n        </rdf:type>\r\n        <edm:hasView rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard/webresource/\"/>\r\n        <edm:hasView rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard\"/>\r\n        <edm:isRelatedTo rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard\"/>\r\n        <dc:relation rdf:resource=\"http://www.europeana.eu/\"/>\r\n        <edm:hasView rdf:resource=\"http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fadore-djatoka%2Fresolver%3Furl_ver%3DZ39.88-2004%26svc_id%3Dinfo%3Alanl-repo%2Fsvc%2FgetRegion%26svc_val_fmt%3Dinfo%3Aofi%2Ffmt%3Akev%3Amtx%3Ajpeg2000%26svc.format%3Dimage%2Fjpeg%26svc.scale%3D1024%2C0%26rft_id%3DC3940_h&amp;size=LARGE&amp;type=IMAGE\"/>\r\n        <edm:aggregatedCHO rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard\"/>\r\n        <edm:isShownAt rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard\"/>\r\n        <edm:hasMet rdf:resource=\"http://www.europeana.eu/\"/>\r\n        <dc:subject rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard\"/>\r\n        <dcterms:hasPart rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard/webresource/\"/>\r\n        <ore:aggregates rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard\"/>\r\n        <edm:isRelatedTo rdf:resource=\"http://www.europeana.eu/\"/>\r\n        <j.0:P129_is_about rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard\"/>\r\n        <edm:provider rdf:resource=\"http://www.europeana.eu/\"/>\r\n      </dctype:Collection>\r\n    </ore:proxyIn>\r\n    <edm:Country>austria</edm:Country>\r\n    <rdf:type rdf:resource=\"http://eexcess.eu/schema/Proxy\"/>\r\n    <rdf:type rdf:resource=\"http://www.openarchives.org/ore/terms/Proxy\"/>\r\n    <ore:proxyFor rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3940_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949&amp;profile=standard\"/>\r\n    <edm:europeanaProxy>false</edm:europeanaProxy>\r\n    <dc:identifier>/11601/_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949</dc:identifier>\r\n    <dc:title>Krumenzelkalk</dc:title>\r\n    <edm:language>de</edm:language>\r\n  </rdfs:Resource>\r\n</rdf:RDF>\r\n",
			"uri" : "http://europeana.eu/resolve/record/11601/_OPENUP_MINERALOGY_NHMV_AUSTRIA_3949",
			"collectionName" : "11601_Ag_EU_OpenUp!_NHMV"
		},
		{
			"facets" : {
				"provider" : "Europeana",
				"language" : "de"
			},
			"previewImage" : "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fadore-djatoka%2Fresolver%3Furl_ver%3DZ39.88-2004%26svc_id%3Dinfo%3Alanl-repo%2Fsvc%2FgetRegion%26svc_val_fmt%3Dinfo%3Aofi%2Ffmt%3Akev%3Amtx%3Ajpeg2000%26svc.format%3Dimage%2Fjpeg%26svc.scale%3D1024%2C0%26rft_id%3DC3932_h&size=LARGE&type=IMAGE",
			"id" : "/11601/_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138",
			"eexcessURI" : "http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&provider=OpenUp%21&id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&profile=standard",
			"title" : "Kristall. Kalk",
			"rdf" : "<rdf:RDF\r\n    xmlns:skos=\"http://www.w3.org/2004/02/skos/core#\"\r\n    xmlns:radion=\"http://www.w3.org/ns/radion#\"\r\n    xmlns:eexcess=\"http://eexcess.eu/schema/\"\r\n    xmlns:edm=\"http://www.europeana.eu/schemas/edm/\"\r\n    xmlns:adms=\"http://www.w3.org/ns/adms#\"\r\n    xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n    xmlns:voaf=\"http://purl.org/vocommons/voaf#\"\r\n    xmlns:vann=\"http://purl.org/vocab/vann/\"\r\n    xmlns:crm=\"http://www.cidoc-crm.org/cidoc-crm/\"\r\n    xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n    xmlns:j.0=\"http://www.cidoc-crm.org/rdfs/cidoc-crm#\"\r\n    xmlns:foaf=\"http://xmlns.com/foaf/0.1/\"\r\n    xmlns:frbr_core=\"http://purl.org/vocab/frbr/core#\"\r\n    xmlns:owl=\"http://www.w3.org/2002/07/owl#\"\r\n    xmlns:dcterms=\"http://purl.org/dc/terms/\"\r\n    xmlns:ore=\"http://www.openarchives.org/ore/terms/\"\r\n    xmlns:abc=\"http://metadata.net/harmony/abc#\"\r\n    xmlns:xsd=\"http://www.w3.org/2001/XMLSchema#\"\r\n    xmlns:dcam=\"http://purl.org/dc/dcam/\"\r\n    xmlns:DOLCE-Lite=\"http://www.loa-cnr.it/ontologies/DOLCE-Lite.owl#\"\r\n    xmlns:rdfg=\"http://www.w3.org/2004/03/trix/rdfg-1/\"\r\n    xmlns:frbroo=\"http://iflastandards.info/ns/fr/frbr/frbroo/\"\r\n    xmlns:dctype=\"http://purl.org/dc/dcmitype/\"\r\n    xmlns:rdfs=\"http://www.w3.org/2000/01/rdf-schema#\"\r\n    xmlns:wgs84_pos=\"http://www.w3.org/2003/01/geo/wgs84_pos#\">\r\n  <eexcess:Proxy rdf:about=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard/proxy/\">\r\n    <edm:europeanaProxy>false</edm:europeanaProxy>\r\n    <dc:identifier>/11601/_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138</dc:identifier>\r\n    <rdf:type rdf:resource=\"http://www.w3.org/2000/01/rdf-schema#Resource\"/>\r\n    <edm:Country>austria</edm:Country>\r\n    <dc:title>Kristall. Kalk</dc:title>\r\n    <ore:proxyFor rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard\"/>\r\n    <ore:proxyIn>\r\n      <rdfs:Resource rdf:about=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard/aggregation/\">\r\n        <j.0:P129_is_about rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard\"/>\r\n        <edm:isShownAt rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard\"/>\r\n        <dcterms:provenance rdf:resource=\"http://www.europeana.eu/\"/>\r\n        <edm:hasView rdf:resource=\"http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fadore-djatoka%2Fresolver%3Furl_ver%3DZ39.88-2004%26svc_id%3Dinfo%3Alanl-repo%2Fsvc%2FgetRegion%26svc_val_fmt%3Dinfo%3Aofi%2Ffmt%3Akev%3Amtx%3Ajpeg2000%26svc.format%3Dimage%2Fjpeg%26svc.scale%3D1024%2C0%26rft_id%3DC3932_h&amp;size=LARGE&amp;type=IMAGE\"/>\r\n        <edm:isRelatedTo rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard\"/>\r\n        <edm:collectionName>11601_Ag_EU_OpenUp!_NHMV</edm:collectionName>\r\n        <edm:isRelatedTo rdf:resource=\"http://www.europeana.eu/\"/>\r\n        <edm:aggregatedCHO rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard\"/>\r\n        <edm:hasView rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard\"/>\r\n        <dcterms:hasPart rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard/webresource/\"/>\r\n        <rdf:type rdf:resource=\"http://purl.org/dc/dcmitype/Collection\"/>\r\n        <ore:aggregates rdf:resource=\"http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fadore-djatoka%2Fresolver%3Furl_ver%3DZ39.88-2004%26svc_id%3Dinfo%3Alanl-repo%2Fsvc%2FgetRegion%26svc_val_fmt%3Dinfo%3Aofi%2Ffmt%3Akev%3Amtx%3Ajpeg2000%26svc.format%3Dimage%2Fjpeg%26svc.scale%3D1024%2C0%26rft_id%3DC3932_h&amp;size=LARGE&amp;type=IMAGE\"/>\r\n        <edm:provider rdf:resource=\"http://www.europeana.eu/\"/>\r\n        <edm:preview rdf:resource=\"http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fadore-djatoka%2Fresolver%3Furl_ver%3DZ39.88-2004%26svc_id%3Dinfo%3Alanl-repo%2Fsvc%2FgetRegion%26svc_val_fmt%3Dinfo%3Aofi%2Ffmt%3Akev%3Amtx%3Ajpeg2000%26svc.format%3Dimage%2Fjpeg%26svc.scale%3D1024%2C0%26rft_id%3DC3932_h&amp;size=LARGE&amp;type=IMAGE\"/>\r\n        <dcterms:hasPart rdf:resource=\"http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fadore-djatoka%2Fresolver%3Furl_ver%3DZ39.88-2004%26svc_id%3Dinfo%3Alanl-repo%2Fsvc%2FgetRegion%26svc_val_fmt%3Dinfo%3Aofi%2Ffmt%3Akev%3Amtx%3Ajpeg2000%26svc.format%3Dimage%2Fjpeg%26svc.scale%3D1024%2C0%26rft_id%3DC3932_h&amp;size=LARGE&amp;type=IMAGE\"/>\r\n        <dc:subject rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard\"/>\r\n        <ore:aggregates rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard/webresource/\"/>\r\n        <edm:hasMet rdf:resource=\"http://www.europeana.eu/\"/>\r\n        <rdf:type>\r\n          <rdfs:Resource rdf:nodeID=\"A0\">\r\n            <rdf:type rdf:resource=\"http://www.w3.org/2002/07/owl#Class\"/>\r\n            <owl:unionOf>\r\n              <rdfs:Resource>\r\n                <rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#List\"/>\r\n                <rdf:first rdf:resource=\"http://www.europeana.eu/schemas/edm/ProvidedCHO\"/>\r\n                <rdf:rest>\r\n                  <rdfs:Resource>\r\n                    <rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#List\"/>\r\n                    <rdf:first>\r\n                      <owl:Class>\r\n                        <owl:intersectionOf>\r\n                          <rdfs:Resource>\r\n                            <rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#List\"/>\r\n                            <rdf:first rdf:resource=\"http://www.openarchives.org/ore/terms/Proxy\"/>\r\n                            <rdf:rest>\r\n                              <rdfs:Resource>\r\n                                <rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#List\"/>\r\n                                <rdf:first>\r\n                                  <owl:Restriction>\r\n                                    <owl:onProperty rdf:resource=\"http://www.openarchives.org/ore/terms/proxyFor\"/>\r\n                                    <owl:someValuesFrom rdf:resource=\"http://www.europeana.eu/schemas/edm/ProvidedCHO\"/>\r\n                                  </owl:Restriction>\r\n                                </rdf:first>\r\n                                <rdf:rest rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#nil\"/>\r\n                              </rdfs:Resource>\r\n                            </rdf:rest>\r\n                          </rdfs:Resource>\r\n                        </owl:intersectionOf>\r\n                      </owl:Class>\r\n                    </rdf:first>\r\n                    <rdf:rest rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#nil\"/>\r\n                  </rdfs:Resource>\r\n                </rdf:rest>\r\n              </rdfs:Resource>\r\n            </owl:unionOf>\r\n            <rdf:type rdf:resource=\"http://www.w3.org/2000/01/rdf-schema#Class\"/>\r\n            <rdfs:subClassOf rdf:nodeID=\"A0\"/>\r\n            <rdfs:subClassOf rdf:resource=\"http://www.w3.org/2000/01/rdf-schema#Resource\"/>\r\n          </rdfs:Resource>\r\n        </rdf:type>\r\n        <rdf:type rdf:resource=\"http://www.openarchives.org/ore/terms/Aggregation\"/>\r\n        <edm:isShownBy rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard/webresource/\"/>\r\n        <ore:aggregates rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard\"/>\r\n        <dc:relation rdf:resource=\"http://www.europeana.eu/\"/>\r\n        <edm:hasView rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard/webresource/\"/>\r\n        <dcterms:hasPart rdf:resource=\"http://europeana.eu/api/4050/redirect?shownAt=http%3A%2F%2Fjacq.nhm-wien.ac.at%2Fimages%2FgeoMin%2Fjacq-viewer%2Fviewer.html%3Frft_id%3DC3932_h%26bt%3Deuropeanaapi&amp;provider=OpenUp%21&amp;id=http%3A%2F%2Fwww.europeana.eu%2Fresolve%2Frecord%2F11601%2F_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138&amp;profile=standard\"/>\r\n        <edm:rights rdf:resource=\"http://creativecommons.org/publicdomain/mark/1.0/\"/>\r\n        <edm:dataProvider rdf:resource=\"http://www.europeana.eu/\"/>\r\n      </rdfs:Resource>\r\n    </ore:proxyIn>\r\n    <edm:language>de</edm:language>\r\n    <rdf:type rdf:resource=\"http://www.openarchives.org/ore/terms/Proxy\"/>\r\n  </eexcess:Proxy>\r\n</rdf:RDF>\r\n",
			"uri" : "http://europeana.eu/resolve/record/11601/_OPENUP_MINERALOGY_NHMV_AUSTRIA_1138",
			"collectionName" : "11601_Ag_EU_OpenUp!_NHMV"
		},
	],
	"provider" : "federated",
	"totalResults" : 2
}
setTimeout(function() {
	iframe.contentWindow.postMessage({event: 'eexcess.newResults', data: dummy}, '*');
}, 2000);