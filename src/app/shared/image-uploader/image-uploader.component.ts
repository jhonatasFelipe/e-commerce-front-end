import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ImagemProdutoService } from 'src/app/admin-pages/services/imagem-produto.service';
import { environment } from 'src/environments/environment.development';
import  ProductImageFile  from 'src/app/models/ProductImageFile';

@Component({
  selector: 'j2-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ImageUploaderComponent,
    multi: true
  }]
})
export class ImageUploaderComponent  implements ControlValueAccessor{

  private _value!: ProductImageFile | null;
   onChange!: (file:ProductImageFile) => void;
   onTouched!:()=> void;
   disable!:boolean;
   percentDone: number = 0;
   originalName!: string;
   url: string  = `${environment.api.host}:${environment.api.port}`;
   fullUrl!: string;
   progress:boolean =  false;
  @Input() 
  placeholder!:string;
  @Input()
  id!:string;
  @Output()
  deleted:EventEmitter<null> = new EventEmitter();

  constructor(private service:ImagemProdutoService){

  }
  
  get value() {
    return  this._value;
  }

  set value(obj:ProductImageFile | null){
    
    if(this.value !== obj){
      this._value  = obj;
    }
  }

  writeValue(obj: ProductImageFile): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  setValue(event:any){
    let formdata = new FormData();
    const file:File = event?.srcElement?.files[0];
    formdata.append('file', file);
    
     this.service.upload(formdata).subscribe({
      next: (event:HttpEvent<ProductImageFile>)=>{
        this.progress = true;
        if(event.type === HttpEventType.Response){
          this.progress = false;
            this.value = event?.body;
            this.fullUrl = this.url +'/storage/'+ this.value?.path;
            this.onChange(this.value!);
        }else if(event.type === HttpEventType.UploadProgress){
            this.percentDone = Math.round((event.loaded * 100) / event.total!);
        }
      }
     });
   }

  toDelete(){
    this.deleted.emit(null);
  }

}
