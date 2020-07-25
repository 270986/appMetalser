import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Http, Headers, Request, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable()
export class ShareService {
    constructor(private http: HttpClient, private _http: HTTP) {

    }

     public login() {
         const test = {
             USUA_DS_LOGIN: "Mac",
             USUA_CD_SENHA: "numsey"
         }
         const headers = new HttpHeaders({ 'Content-Type': 'application/application/json' });
         return this.http.post('http:localhost/apiMetalser/api/token', test, { headers });
     }

    // public login() {
    //     const test = {
    //         USUA_DS_LOGIN: "Mac",
    //         USUA_CD_SENHA: "numsey"
    //     }
    //     return this._http.put('http://localhost/apiMetalser/api/token', { test }, { 'Content-Type': 'application/application/json' });
    // }


    // login(USUA_DS_LOGIN, USUA_CD_SENHA){
    //     var _url = "http://localhost:44337/api/LoginMetal";
    //     var _body={"usuario":USUA_CD_SENHA, "senha": USUA_CD_SENHA};
    //     var _header=new Headers({'Content-Type':'Application/json'});
    //     var _option=new RequestOptions({method:RequestMethod.Post, headers:_header});
    //     return this.http.post(_url,_body,_option).map(res=>res.json());
    // }



}