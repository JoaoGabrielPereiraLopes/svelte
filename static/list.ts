class no {
    public valor:any
    public proximo:any
    public constructor(valor=null,proximo=null) {
        this.valor=valor
        this.proximo=proximo
    }
    public cadeia(a:any){
        this.proximo=a
    }
}
class lista{
    private cabeça:any=null
    private tamanho:number
    public constructor(){
        this.tamanho=0
    }

    public add(valor:any,pos:number){
        let novo = new no(valor)
        this.tamanho++
        if(this.tamanho-1==0){
            this.cabeça=novo
            return
        }

        else if(pos<=0){
            novo.cadeia(this.cabeça)
            this.cabeça=novo
            return
        }
        
        else{
            let prox=this.cabeça
            for(let x=0;x!=pos-1||prox==null;x++){
                prox=prox.proximo
            }
            novo.cadeia(prox.proximo)
            prox.cadeia(novo)
        }
    }
    
    public index(pos:number){
        let prox=this.cabeça
        for(let x=0;x!=pos||prox==null;x++){
            prox=prox.proximo
        }
        return prox.valor
    }

    public modify(value:any,pos:number){
        let prox=this.cabeça
        for(let x=0;x!=pos||prox==null;x++){
            prox=prox.proximo
        }
        prox.valor=value
    }
    
    public remove(pos:number){
        let prox=this.cabeça
        for(let x=0;x!=pos-1||prox==null;x++){
            prox=prox.proximo
        }
        prox.cadeia(prox.proximo.proximo)
        this.tamanho--
    }
    
    public __total__(){
        let prox=this.cabeça
        let retorno:any=[]
        while(prox!=null){
            retorno.push(prox.valor)
            prox=prox.proximo
        }
        return retorno
    }

    public to_string(){
        let prox=this.cabeça
        let retorno:string=''
        while(prox!=null){
            retorno+=String(prox.valor)
            prox=prox.proximo
        }
        return retorno
    }

    public __len__(){
        return this.tamanho
    }

    public enumerate(){
        let prox=this.cabeça
        let x=0
        while(prox!=null){
            console.log(String(x)+':',prox.valor)
            prox=prox.proximo
            x++
        }
    }

    public split(a:any){
        let prox=this.cabeça
        let retorno:any=[]
        let fluxo_inicial=new no()
        let fluxo=fluxo_inicial
        while(prox!=null){
            if(prox.valor!=a){
                if(fluxo.valor==null){
                    fluxo.valor=prox.valor
                    if(prox.proximo.valor!=a){
                        fluxo.proximo=prox.proximo
                    }
                }
                else{
                    fluxo.valor=prox.valor
                }
            }
            else{
                retorno.push(fluxo_inicial)
                fluxo_inicial=new no()
                fluxo=fluxo_inicial
            }
            prox=prox.proximo
        }
        return retorno
    }
}

var lista1 = new lista()
lista1.add(2, 3)
lista1.add(1, 0)
lista1.add(20, 1)
lista1.add(2, 1)
console.log(lista1.split(2))
lista1.add(1,1)
console.log(lista1.split(2))
console.log(lista1)
console.log(lista1.index(1))
lista1.remove(1)
console.log(lista1)
lista1.modify(20,1)
console.log(lista1.index(1))
console.log(lista1)
console.log(lista1.__total__())
lista1.enumerate()
console.log(lista1.__len__())