import {FooterComponent as SourceFooter} from 'SourceComponent/Footer/Footer.component';
import './Footer.style';

class FooterComponent extends SourceFooter {
        renderContent()  {
        return (<h3>hello world</h3>);
    }   


}

export default FooterComponent;
