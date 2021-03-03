import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ]),
    NgbModule,
	
	
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }