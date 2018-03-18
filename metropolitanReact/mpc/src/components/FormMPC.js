import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import './FormMPC.css';


export default class FormMPC extends Component {
    state = {
        value: true,
        torneio: 1,
        premiacaoTorneio: 2000.00,
        quantidadePremiados: 9,
        testeAutocomplete: 'apple'
    };

  handleChange = (event, index, value) => this.setState({value});

  getQuantidadePremiados = (premiacao) => {
    if(premiacao > 0 && premiacao < 1000) return 5;
    else if(premiacao >= 1000 && premiacao < 2000) return 7;
    else if(premiacao >= 2000 && premiacao < 10000) return 9;
    else return 18;
  }

  onChangePremiacao = (e, premiacaoTorneio) => {
    this.state.premiacaoTorneio    = (e) ? e.target.value : premiacaoTorneio;
    this.state.quantidadePremiados = this.getQuantidadePremiados(this.state.premiacaoTorneio);
    this.forceUpdate();
  }

  onChangeTorneio = (e) => {
    this.state.torneio = e.target.value;
    if(this.state.torneio == 1) {
        this.state.premiacaoTorneio = 2000.00;
        this.forceUpdate();
    }
    else if(this.state.torneio == 2) {
        this.state.premiacaoTorneio = 3000.00;
        this.forceUpdate();
    }
    else if(this.state.torneio == 3) {
        this.state.premiacaoTorneio = 800.00;
        this.forceUpdate();
        
    }
    else {
        this.state.premiacaoTorneio = 1000.00;
        this.forceUpdate();
    }
    this.onChangePremiacao('', this.state.premiacaoTorneio);
  }

  getFieldsPremiados(i) {
    var formReturn = [];
    if(i !== 0) {
        var count = 1;
        if(i % 2 != 0) {
            formReturn[count] = 
            <FormGroup>
                <Label for="premiacaoTorneio" className="center">1º Colocado</Label>
                <InputGroup>                       
                    <Input placeholder="" type="text" name="premiacaoTorneio"/>
                </InputGroup>
            </FormGroup>;
            i-= 1;
            count+=1;
        }

        for(; i > 0; i-=2, count+=2) {
            var nomePremiado  = 'Premiado'+count;
            var nomePremiado2 = 'Premiado'+count+1;
            var placeholder   = '';
            var placeholder2  = '';
            formReturn[count] =
            <FormGroup row className="form">      
                {this.getField(count, placeholder, nomePremiado)}
                {this.getField(count+1, placeholder2, nomePremiado2)}
            </FormGroup>;
        }
        return formReturn;
    }
  }


  getField(numeroColocado, placeholder, nomePremiado) {
    return <Col sm={6}>
        <Label for="premiacaoTorneio" className="center">{numeroColocado}º Colocado</Label>
        <InputGroup>                       
            <Input placeholder={placeholder} type="text" name={nomePremiado}/>
        </InputGroup>
    </Col>
  }

  render() {
    return (
      <div>
          <Form>
                <FormGroup row className="form">      
                    <Col sm={6}>
                        <Label for="torneio" className="center">Selecione o Torneio</Label>
                        <Input type="select" name="select" id="torneio" onChange={this.onChangeTorneio}>
                            <option value="1">Torneio Piemonte</option>
                            <option value="2">Torneio Pampulha</option>
                            <option value="3">Torneio Freeroll</option>
                            <option value="4">Torneio Mineirão</option>
                        </Input>
                    </Col>
                    <Col sm={6}>
                        <Label for="premiacaoTorneio" className="center">Premiação do Torneio</Label>
                        <InputGroup>                       
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                            <Input placeholder="0.00" value={this.state.premiacaoTorneio} type="number" name="premiacaoTorneio" onBlur={this.onChangePremiacao}/>
                        </InputGroup>
                    </Col>
                </FormGroup>
                {this.getFieldsPremiados(this.state.quantidadePremiados)}
            </Form>
      </div>
    );
  }
}