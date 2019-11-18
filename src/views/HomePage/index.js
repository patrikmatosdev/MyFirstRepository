import React from 'react';
import Page from '../../components/Page';
import SolicitationBox from '../../components/SolicitationBox';
import EditBox from '../../components/EditBox';
import ApprovaBox from '../../components/ApprovalBox';

export default class HomePage extends React.Component {
  render() {
    const date = new Date();
    
    return (
      <Page>
        <EditBox
          title="Datas Limites"
          help="Ajuste quais datas podem ser criadas aqui"
        >
          asdfghjsadasdassasasa <br /> sadsadasdasdasdasdsadas <br /> sjadjsadhsadsaudas <br /> sasdsadasasasa <br/>
        </EditBox>
        <ApprovaBox
          title="Grade Horária"
          UserName="Patrik Matos"
          description="Alterou á grade horaria de transferencias de"
        />
        <SolicitationBox
          theme="red"
          title="Solicitação Aprovada"
          username="Giovanne Afonso"
          description="Aprovou a alteração da grade de transferência"
          date={date}
        />

        <SolicitationBox
          theme="yellow"
          title="Aprovação Pendente"
          username="Patrik Matos"
          description="Esta solicitação está pendente de avaliação"
          date={date}
        />

        <SolicitationBox
          theme="green"
          title="Aprovação Recusada"
          username="João de Almeida"
          description="Recusou a alteração da grade de transferência"
          date={date}
        />
      </Page>
    )
  }
}
