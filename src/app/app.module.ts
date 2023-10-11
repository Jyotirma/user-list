import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { IndexeddbService } from './indexeddb.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const dbConfig: DBConfig = {
  name: 'myDB',
  version: 1,
  objectStoresMeta: [{
    store: 'users',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'userid', keypath: 'userid', options: { unique: true } },
      { name: 'fName', keypath: 'fName', options: { unique: false } },
      { name: 'lName', keypath: 'lName', options: { unique: false } },
      { name: 'nickname', keypath: 'nickName', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: true } },
      { name: 'phone', keypath: 'phone', options: { unique: false } },
      { name: 'userType', keypath: 'userType', options: { unique: false } },
      { name: 'checked', keypath: 'checked', options: { unique: false } },
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavComponent,
    UserComponent,
    TableComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,

    FormsModule,
    NgChartsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    MatIconModule,
    CommonModule,
  ],
  providers: [IndexeddbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
