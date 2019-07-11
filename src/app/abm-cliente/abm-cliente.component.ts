import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'abm-cliente',
  templateUrl: './abm-cliente.component.html',
  styleUrls: ['./abm-cliente.component.css']
})
export class AbmClienteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  formAbmCliente = new FormGroup({
    name : new FormControl('', Validators.required),
    cuit : new FormControl('', Validators.required),
  })

  ngOnInit() {

    this.route.params.subscribe( params => {
      console.log('llego el id ' + params["id"]);
      
    });
  }

}
