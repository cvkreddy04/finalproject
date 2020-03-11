package com.cts.starter.stockprice.pojo;




import java.sql.Date;
import java.sql.Time;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="Stockprice")
public class Stockprice {



 private String companyname;
 @Id
private String stockexchange;

private String currentprice;

private Date date;

private Time time;




@Override
public String toString() {
	return "Stockprice [companyname=" + companyname + ", stockexchange=" + stockexchange + ", currentprice="
			+ currentprice + ", date=" + date + ", time=" + time + "]";
}

public Date getDate() {
	return date;
}

public void setDate(Date date) {
	this.date = date;
}

public Time getTime() {
	return time;
}

public void setTime(Time time) {
	this.time = time;
}

public String getCompanyname() {
	return companyname;
}

public void setCompanyname(String companyname) {
	this.companyname = companyname;
}

public String getStockexchange() {
	return stockexchange;
}

public void setStockexchange(String stockexchange) {
	this.stockexchange = stockexchange;
}

public String getCurrentprice() {
	return currentprice;
}

public void setCurrentprice(String currentprice) {
	this.currentprice = currentprice;
}


  
 

}
