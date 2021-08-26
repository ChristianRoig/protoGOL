import { AfterViewInit, Component, ElementRef, Renderer2 , ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';

type FormdataType = {
    nombre: string,
    apellido: string,
    dni: string,
    fechaNacimiento: Fecha,
    genero: string
}

type Fecha = {
    dia: number,
    mes: string,
    anio: number
}
type FormdataContactoType = 
{
    email: string,
    telefono: string,
    domicilio: Domicilio
}
type Domicilio = 
{
    calle: string,
    numero: string,
    piso?: string,
    depto?: string
}

@Component({
    selector     : 'forms-layouts',
    templateUrl  : './layouts.component_v1.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class FormsLayoutsComponent implements AfterViewInit
{
    /**
     * Benja's declarations
     */
    title: string = 'Datos Personales';
    placeholder: string = '';

    formData: FormdataType = 
    { 
        nombre:'Juana',
        apellido: 'Puime',
        dni: '39.587.098',
        fechaNacimiento: 
        {
            dia: 7,
            mes: 'abril',
            anio: 2020
        },
        genero: 'Femenino'
    }
    formDataContacto: FormdataContactoType = 
    {
        email: 'jpuime@tdm.com.ar',
        telefono: '2494466860',
        domicilio: 
        {
            calle: 'calle falsa',
            numero: '123',
            depto: null,
            piso: null
        }
    };
    formPrimario : FormGroup;
    formContacto: FormGroup;

    hidden: boolean = true;

    @ViewChild('btn',{static: true}) btn: ElementRef;

    /**
     * Constructor
     */
    constructor( private _fb: FormBuilder, private _r2: Renderer2 )
    {
        this.formPrimario = this._initForm();
        this.formContacto = this._initFormContacto();
    }

    get telefono() {
        return this.formContacto.get('telefono');
    }
    get email() {
        return this.formContacto.get('email');
    }
    get domicilio() { 
        return this.formContacto.get('domicilio');
    }

    ngAfterViewInit(): void {
        this.formContacto.valueChanges.subscribe(
            (changes:any) => {
                if(changes){
                    /* console.log({changes}); */
                    /* const grv = this._getRawValue(); */
                    /* console.log({grv}) */
                }
            }
        );
    }

    disable(): void {
        this.hidden = true;
    }

    enable(): void {
        this.hidden = false;
    }

    editarInput(newValue: any): void {
        const { domicilio, email, telefono } = newValue;
        this.formDataContacto.domicilio = domicilio ? domicilio : this.domicilio;
        this.formDataContacto.email = email ? email : this.email;
        this.formDataContacto.telefono = telefono ? telefono : this.telefono;
    }
    habilitarFormulario(): void {
        this.email.enable();
        this.telefono.enable();
        this.domicilio.enable();
    }

    guardarCambios(value): void {
        // console.log({value});
        if(value){
            this.editarInput(value);
            this.cancelar();
        }else {
            this.cancelar();
        }
    }

    cancelar(): void { // se cancela la accion desabilitando los botones sin enviar los cambios
        this.email.disable();
        this.telefono.disable();
        this.domicilio.disable();
    }
    private _initForm(): FormGroup {
        return this._fb.group(
            {
                nombreYApellido: new FormControl(
                { 
                    value: this._setNombreYApellido(this.formData.nombre, this.formData.apellido),
                    disabled: true    
                }),
                apellido: new FormControl(
                { 
                    value: this.formData.apellido,
                    disabled: true
                }),
                dni: new FormControl(
                {
                    value: this.formData.dni,
                    disabled: true
                }),
                fechaNacimiento: new FormControl(
                {
                    value: this._setFechaNacimiento(this.formData.fechaNacimiento),
                    disabled: true
                }),
                genero: new FormControl(
                {   
                    value: this.formData.genero ,
                    disabled:true
                })
            }
        );
    }
    private _initFormContacto(): FormGroup {
        return this._fb.group({
            email: new FormControl(
            {
                value: this.formDataContacto.email,
                disabled: true
            }),
            telefono: new FormControl(
            {
                value: this.formDataContacto.telefono,
                disabled: true
            }),
            domicilio: new FormControl(
            {
                value: this._setDomicilio(this.formDataContacto.domicilio),
                disabled: true
            }
            )
        });
    }
    private _setFechaNacimiento(fecha: Fecha): string {
        return `${fecha.dia} de ${fecha.mes} del ${fecha.anio}`;
    }
    private _setNombreYApellido(nombre:string, apellido:string): string {
        return `${apellido}, ${nombre}`;
    }
    private _setDomicilio(domicilio: Domicilio): string {
        return `${domicilio.calle} ${domicilio.numero}  piso: ${domicilio.piso? domicilio.piso : '-'} dpto: ${domicilio.depto ? domicilio.depto : '-'}`;
    }

}
