import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SqrtPipe } from "./sqrt.pipe";
import { HttpClientModule } from "@angular/common/http";
import { SquarePipe } from './square.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    SqrtPipe,
    SquarePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
