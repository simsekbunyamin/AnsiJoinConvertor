T-SQL Ansi Join Convertor 

This simple app will convert old-style t-sql joins to Ansi-92 standart joins. 

An example

This code:
    Select  *
    From    table1 As t1, table2 As t2 
    Where   t1.id = t2.id


will be converted to this: 

    Select  *
    From    table1 As t1
    		Inner Join table2 As t2 On t1.id = t2.id




for Sql Server
