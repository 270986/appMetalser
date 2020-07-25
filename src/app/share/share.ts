import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Http, Headers, Request, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add'


@Injectable()
export class ShareService{
    constructor(private http:Http){

    }

    login(USUA_DS_LOGIN, USUA_CD_SENHA){
        var _url = "http://localhost:44337/api/LoginMetal";
        var _body={"usuario":USUA_CD_SENHA, "senha": USUA_CD_SENHA};
        var _header=new Headers({'Content-Type':'Application/json'});
        var _option=new RequestOptions({method:RequestMethod.Post, headers:_header});
        return this.http.post(_url,_body,_option).map(res=>res.json());
    }



}