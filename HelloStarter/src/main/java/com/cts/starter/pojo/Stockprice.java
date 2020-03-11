package com.cts.starter.pojo;





import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="Stockprice")
public class Stockprice {

@Id

 private String companyname;

private String stockexchange;

private String currentprice;

private String date;

private String time;




@Override
public String toString() {
	return "Stockprice [companyname=" + companyname + ", stockexchange=" + stockexchange + ", currentprice="
			+ currentprice + ", date=" + date + ", time=" + time + "]";
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

public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}

public String getTime() {
	return time;
}

public void setTime(String time) {
	this.time = time;
}


  
 

}
