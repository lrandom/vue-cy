<template>
  <div id="may_tinh">
    <div id="ket_qua">
      <div style="    position: absolute;
    top: 0;" class="hien_so">
      </div>
      <div id="ket_qua_cu" style="width:100%">
        <div style="border:1px solid #cdcdcd;height:35px;width:100%">
          {{ result }}
        </div>
      </div>
    </div>
    <div id="ban_phim">
      <div id="ban_phim">
        <button class="he_thong" @click="getInput('C')" id="xoa_tat_ca">C</button>
        <button class="he_thong" @click="getInput('/')" id="/">÷</button>
        <button class="con_so" @click="getInput(7)" id="7">7</button>
        <button class="con_so" @click="getInput(8)" id="8">8</button>
        <button class="con_so" @click="getInput(9)" id="9">9</button>
        <button class="he_thong" @click="getInput('*')" id="*">×</button>
        <button class="con_so" @click="getInput(4)" id="4">4</button>
        <button class="con_so" @click="getInput(5)" id="5">5</button>
        <button class="con_so" @click="getInput(6)" id="6">6</button>
        <button class="he_thong" @click="getInput('-')" id="-">-</button>
        <button class="con_so" @click="getInput(1)" id="1">1</button>
        <button class="con_so" @click="getInput(2)" id="2">2</button>
        <button class="con_so" @click="getInput(3)" id="3">3</button>
        <button class="he_thong" @click="getInput('+')" id="+">+</button>
        <button class="trong" id="trong"></button>
        <button class="con_so" @click="getInput(0)" id="0">0</button>
        <button class="trong" id="trong"></button>
        <button class="he_thong" @click="getInput('=')" id="=">=</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      result: '',
      operationName: null,
      numberOne: null,
      numberTwo: null
    }
  },
  methods: {
    getInput(inputValue) {
      if (inputValue == '+') {
        this.operationName = '+';
        return;
      }
      if (inputValue == '-') {
        this.operationName = '-';
        return;
      }
      if (inputValue == '/') {
        this.operationName = '/';
        return;
      }
      if (inputValue == '*') {
        this.operationName = '*';
        return;
      }

      if (!this.operationName && !isNaN(inputValue)) {
        this.result = '';
        this.numberOne = !this.numberOne ? inputValue : this.numberOne + '' + inputValue;
        this.result = this.numberOne;
        return;
      }

      if (this.numberOne >= 0 && this.operationName && !isNaN(inputValue)) {
        this.result = '';
        this.numberTwo = !this.numberTwo ? inputValue : this.numberTwo + '' + inputValue;
        this.result = this.numberTwo;
        return;
      }

      if (inputValue == '=') {
        switch (this.operationName) {
          case '+':
            this.result = parseInt(this.numberOne) +  parseInt(this.numberTwo);
            break;
          case '-':
            this.result =  parseInt(this.numberOne) -  parseInt(this.numberTwo);
            break
          case '*':
            this.result = parseInt( this.numberOne) *  parseInt(this.numberTwo);
            break
          case '/':
            this.result =  parseInt(this.numberOne)/  parseInt(this.numberTwo);
            break
        }
        this.numberOne = null;
        this.numberTwo = null;
        this.operationName = null;
        return;
      }
      if (inputValue == 'C') {
        this.numberOne = null;
        this.numberTwo = null;
        this.operationName = null;
        this.result = null;
      }
    }
  },
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
#ket_qua {
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  padding: 10px;
  border: none;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 700;
}

.he_thong,
.con_so,
.trong {
  width: 50px;
  height: 50px;
  margin: 15px;
  float: left;
  border-radius: 50%;
  border-width: 0;
  font-weight: bold;
  font-size: 16px;
}

.con_so,
.trong {
  background-color: #eaedef;
}

.he_thong,
.con_so {
  cursor: pointer;
}

.he_thong:active,
.con_so:active {
  font-size: 13px;
}

.he_thong:focus,
.con_so:focus,
.trong:focus {
  outline: 0;
}

button {
  transition: background 0.8s;
}

button:hover {
  background: #000;
  color: #fff;
}

button:nth-child(4) {
  font-size: 20px;
  background-color: #20b2aa;
}

button:nth-child(8) {
  font-size: 20px;
  background-color: #ffa500;
}

button:nth-child(12) {
  font-size: 20px;
  background-color: #f08080;
}

button:nth-child(16) {
  font-size: 20px;
  background-color: #7d93e0;
}

button:nth-child(20) {
  font-size: 20px;
  background-color: #9477af;
}

body {
  font-family: Roboto;
  background: #373B44;
  background: -webkit-linear-gradient(to right, #4286f4, #373B44);
  background: linear-gradient(to right, #4286f4, #373B44);
}

#may_tinh {
  width: 320px;
  height: 520px;
  background-color: #eaedef;
  top: 20px;
  margin: 0 auto;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

#ket_qua {
  height: 120px;
}

#ket_qua_cu {
  text-align: right;
  height: 20px;
  margin: 0 20px;
  padding-top: 20px;
  font-size: 15px;
  color: #919191;
}

#xuat_ket_qua {
  text-align: right;
  height: 60px;
  margin: 10px 20px;
  font-size: 30px;
}

#ban_phim {
  height: 400px;
}
</style>
