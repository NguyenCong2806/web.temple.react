import "./footer.scss";
import DOMPurify from 'dompurify'
import parse, { attributesToProps } from 'html-react-parser';

const footer = () => {
  const rawHTML = `<div id="getfly-optin-form-iframe-1710492794708"></div><script type="text/javascript"> (function(){ var r = window.document.referrer != ""? window.document.referrer: window.location.origin; var regex = /(https?:\/\/.*?)\//g; var furl = regex.exec(r); r = furl ? furl[0] : r; var f = document.createElement("iframe"); const url_string = new URLSearchParams(window.location.search); var utm_source, utm_campaign, utm_medium, utm_content, utm_term; if((!url_string.has('utm_source') || url_string.get('utm_source') == '') && document.cookie.match(new RegExp('utm_source' + '=([^;]+)')) != null){ r+= "&" +document.cookie.match(new RegExp('utm_source' + '=([^;]+)'))[0]; } else { r+= url_string.get('utm_source') != null ? "&utm_source=" + url_string.get('utm_source') : "";} if((!url_string.has('utm_campaign') || url_string.get('utm_campaign') == '') && document.cookie.match(new RegExp('utm_campaign' + '=([^;]+)')) != null){ r+= "&" +document.cookie.match(new RegExp('utm_campaign' + '=([^;]+)'))[0]; } else { r+= url_string.get('utm_campaign') != null ? "&utm_campaign=" + url_string.get('utm_campaign') : "";} if((!url_string.has('utm_medium') || url_string.get('utm_medium') == '') && document.cookie.match(new RegExp('utm_medium' + '=([^;]+)')) != null){ r+= "&" +document.cookie.match(new RegExp('utm_medium' + '=([^;]+)'))[0]; } else { r+= url_string.get('utm_medium') != null ? "&utm_medium=" + url_string.get('utm_medium') : "";} if((!url_string.has('utm_content') || url_string.get('utm_content') == '') && document.cookie.match(new RegExp('utm_content' + '=([^;]+)')) != null){ r+= "&" +document.cookie.match(new RegExp('utm_content' + '=([^;]+)'))[0]; } else { r+= url_string.get('utm_content') != null ? "&utm_content=" + url_string.get('utm_content') : "";} if((!url_string.has('utm_term') || url_string.get('utm_term') == '') && document.cookie.match(new RegExp('utm_term' + '=([^;]+)')) != null){ r+= "&" +document.cookie.match(new RegExp('utm_term' + '=([^;]+)'))[0]; } else { r+= url_string.get('utm_term') != null ? "&utm_term=" + url_string.get('utm_term') : "";} if((!url_string.has('utm_user') || url_string.get('utm_user') == '') && document.cookie.match(new RegExp('utm_user' + '=([^;]+)')) != null){ r+= "&" +document.cookie.match(new RegExp('utm_user' + '=([^;]+)'))[0]; } else { r+= url_string.get('utm_user') != null ? "&utm_user=" + url_string.get('utm_user') : "";} if((!url_string.has('utm_account') || url_string.get('utm_account') == '') && document.cookie.match(new RegExp('utm_account' + '=([^;]+)')) != null){ r+= "&" +document.cookie.match(new RegExp('utm_account' + '=([^;]+)'))[0]; } else { r+= url_string.get('utm_account') != null ? "&utm_account=" + url_string.get('utm_account') : "";} r+="&full_url="+encodeURIComponent(window.location.href); f.setAttribute("src", "https://aum.getflycrm.com/api/forms/viewform/?key=HP1bi1741DONUroB9GQ57TR1T4CptnPOUHCvwapGOdPkGzc5pZ&referrer="+r); f.style.width = "100%";f.style.height = "400px";f.setAttribute("frameborder","0");f.setAttribute("marginheight","0"); f.setAttribute("marginwidth","0");var s = document.getElementById("getfly-optin-form-iframe-1710492794708");s.appendChild(f); })(); </script>`;
  let clean = DOMPurify.sanitize(rawHTML, {USE_PROFILES: {html: true}});
  const options = {
    replace(domNode:any) {
      if (domNode.attribs && domNode.name === 'main') {
        const props = attributesToProps(domNode.attribs);
        return <div {...props} />;
      }
    },
  };
  function htmlDecode(html:any) {
    return html.replace(/&([a-z]+);/ig, (match: any, entity: any) => {
      const entities = { amp: '&', apos: '\'', gt: '>', lt: '<', nbsp: '\xa0', quot: '"' };
      entity = entity.toLowerCase();
      if (entities.hasOwnProperty(entity)) {
        return entities;
      }
      return match;
    });
  }
  return (
    <>
      <div> Hienej lee</div>
      <div dangerouslySetInnerHTML={{ __html: htmlDecode(rawHTML) }} />
  
    </>
  );
};

export default footer;
