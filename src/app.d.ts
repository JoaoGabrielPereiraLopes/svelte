// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		
		interface Locals {
			User: {
				ID: number;
				Name: string;
				Born: Date;
				Register: string;
				Nickname: string;
				Library: Library;
			};
			LibraryGame: {
				Game: Game;
				Library: Library;
			};
			Library: {
				Nivel: number;
			};
			Tag: {
				Name: string;
				PopularityAgeRange: number;
			};
			TagGame: {
				Game: Game;
				Tag: Tag;
			};
			Game: {
				Value: number;
				Name: string;
				Age: number;
				Description: string;
				photo:string;
			};
		}
		class Game implements Locals.Game{
		
			private Value: number;
			private Name: string;
			private Age: number;
			private Description: string;
			private photo:string;
			
			public constructor(Value:number,Name:string,Age:Number,Description:string,photo:string){
		
				this.Value=Value;
				this.Name=Name;
				this.Age=Age;
				this.Description=Description;
				this.photo=photo;
		
			}

			public getValue():number{
		
				return this.Value
		
			}
			public getName():string{
		
				return this.Name
		
			}
			public getAge():number{
		
				return this.Age
		
			}
			public getDescription():string {
		
				return this.Description
		
			}
			public getphoto(){
		
				return this.photo;
		
			}
			
			public Gamesend():JSON{
				
				const formData = {
					idade: this.Age,
					nome: this.Name,
					valor: this.Value,
					descricao: this.Description,
					foto: this.photo // Base64 da imagem
				};

				const response = await fetch('/gamesend/registra-jogo', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
				});

				const result = await response.json();

				return result
			}

			public static GameTake():JSON{
				
			}
		}
		
		class TagGame implements Locals.TagGame{
			
			public Game: Game;
			public Tag: Tag;

			public constructor(game:Game,tag:Tag){
				this.Game=game;
				this.Tag=tag
			}
		
		}

		class User implements Locals.User{
			private ID: number;
			private Name: string;
			private Born: Date;
			private Register: string;
			private Nickname: string;
			private Library: Library;
			private photo:string

			constructor(ID:number,Name:string,Born:Date,Register:string,nickname:string,Library:Library){
				this.ID=ID;
				this.Name=Name;
				this.Born=Born;
				this.Register=Register;
				this.Nickname=nickname;
				this.Library=Library;
			}

			public takeID(){
				return this.ID
			}
			public takeName(){
				return this.Name
			}
			public takeBorn(){
				return this.Born
			}
			public takeRegister(){
				return this.Register
			}
			public takeNickname(){
				return this.Nickname
			}
			public takeLibrary(){
				return this.Library
			}
			public takePhoto(){
				return this.photo
			}

			public SendUser():JSON{
				const formData = {
					ID: this.ID,
					Name: this.Name,
					Born: this.Born,
					Register: this.Register,
					Nickname:this.Nickname,
					Library:this.Library,
					photo: this.photo
				};

				const response = await fetch('/UserSend/register-user', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
				});

				const result = await response.json();

				return result
			}
		}
		class Library implements Locals.Library{
			Nivel: number;
			
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
