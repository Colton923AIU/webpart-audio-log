import * as React from 'react';
import type { ITemplateProps } from './ITemplateProps';

const Template: React.FC<ITemplateProps> = (props: ITemplateProps) => {
    return (
      <section>
       <span>
        But when you refresh the browser it works fine. 
       </span>
      </section>
    );
  
}

export default Template

