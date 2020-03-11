package com.cts.starter.pojo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Stockexchange")
public class Stockexchange {

	@Id

	private int stockexid;

	private String stockexchange;

	private String brief;

	private String remarks;

	private String contactaddress;

	@Override

	public String toString() {

		return "StockExchange [stockexid=" + stockexid + ", stockexchange=" + stockexchange + ", brief=" + brief + ", remarks="

				+ remarks + ", contactaddress=" + contactaddress + "]";

	}

	public int getStockexid() {

		return stockexid;

	}

	public void setStockexid(int stockexid) {

		this.stockexid = stockexid;

	}

	public String getStockexchange() {

		return stockexchange;

	}

	public void setStock_exchange(String stock_exchange) {

		this.stockexchange = stockexchange;

	}

	public String getBrief() {

		return brief;

	}

	public void setBrief(String brief) {

		this.brief = brief;

	}

	public String getRemarks() {

		return remarks;

	}

	public void setRemarks(String remarks) {

		this.remarks = remarks;

	}

	public String getContactaddress() {

		return contactaddress;

	}

	public void setContactaddress(String contactaddress) {

		this.contactaddress = contactaddress;

	}

}
