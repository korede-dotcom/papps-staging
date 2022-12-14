import { writable } from "svelte/store";

// import { Breadcrumb, BreadcrumbItem } from "carbon-components-svelte";
export const baseURL = "https://api.github.com";
export const token = writable(localStorage.getItem('token'));
const logs = [
    {
    BankID: '34320',	
    MerchantTransactionId: 12345,
    DateTime: new Date(),
    Amount: 125,
    Currency: "USD",
    Status: "failed",
    Method: "patch",
    MethodTransactionId: 12345,
    Country: "NG",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 12345,
    DateTime: new Date(),
    Amount: 666,
    Currency: "USD",
    Status: "cancelled",
    Method: "test",
    MethodTransactionId: 12345,
    Country: "US",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 343,
    DateTime: new Date(),
    Amount: 12345,
    Currency: "USD",
    Status: "failed",
    Method: "BankID",
    MethodTransactionId: 12345,
    Country: "ZA",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 12345,
    DateTime: new Date(),
    Amount: 19,
    Currency: "USD",
    Status: "success",
    Method: "Post",
    MethodTransactionId: 12345,
    Country: "UG",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 9865,
    DateTime: new Date(),
    Amount: 12345,
    Currency: "USD",
    Status: "failed",
    Method: "BankID",
    MethodTransactionId: 12345,
    Country: "CA",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 12345,
    DateTime: new Date(),
    Amount: 65323,
    Currency: "USD",
    Status: "success",
    Method: "BankID",
    MethodTransactionId: 66688,
    Country: "BA",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 12345,
    DateTime: new Date(),
    Amount: 12345,
    Currency: "USD",
    Status: "success",
    Method: "post",
    MethodTransactionId: 12345,
    Country: "GH",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 12345,
    DateTime: new Date(),
    Amount: 12345,
    Currency: "USD",
    Status: "failed",
    Method: "BankID",
    MethodTransactionId: 12345,
    Country: "KN",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 12345,
    DateTime: new Date(),
    Amount: 12345,
    Currency: "USD",
    Status: "success",
    Method: "put",
    MethodTransactionId: 12345,
    Country: "SM",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 12345,
    DateTime: new Date(),
    Amount: 12345,
    Currency: "USD",
    Status: "failed",
    Method: "BankID",
    MethodTransactionId: 12345,
    Country: "TG",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 12345,
    DateTime: new Date(),
    Amount: 12345,
    Currency: "USD",
    Status: "success",
    Method: "put",
    MethodTransactionId: 12345,
    Country: "CM",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 12345,
    DateTime: new Date(),
    Amount: 12345,
    Currency: "USD",
    Status: "success",
    Method: "BankID",
    MethodTransactionId: 12345,
    Country: "MG",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 12345,
    DateTime: new Date(),
    Amount: 12345,
    Currency: "USD",
    Status: "failed",
    Method: "BankID",
    MethodTransactionId: 12345,
    Country: "US",
    Action: "Initiate Refund",
    },
    {
    BankID: 12345,	
    MerchantTransactionId: 12345,
    DateTime: new Date(),
    Amount: 12345,
    Currency: "USD",
    Status: "success",
    Method: "patch",
    MethodTransactionId: 12345,
    Country: "US",
    Action: "Initiate Refund",
    },
    {
    BankID: 777,	
    MerchantTransactionId: 7777,
    DateTime: new Date(),
    Amount: 7777,
    Currency: "yen",
    Status: "failed",
    Method: "BankID",
    MethodTransactionId: 12345,
    Country: "CH",
    Action: "Initiate Refund",
    }


]
export const data  = writable(logs);
console.log(data.subscribe);