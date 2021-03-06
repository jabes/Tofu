import React from 'react';
import PrismCode from '~/components/PrismCode';
import style from './index.styl';
import codeRaw from './code.raw.js';

class TofuDomBuild extends React.Component {

  componentDidMount() {
    eval(codeRaw);
  }

  render() {
    return (
      <section className={style.section}>
        <h2>Build HTML From JSON</h2>
        <div id="TofuDomBuild" className={style.container}></div>
        <p>The code:</p>
        <PrismCode code={codeRaw} language="js" plugins={[]} />
      </section>
    );
  }

}

export default TofuDomBuild;
