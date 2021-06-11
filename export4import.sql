
select
`orderID` AS `idlibrary`,
`ic`,
`dic`,
`oName`,
`libName`,
`libStreet`,
`libCity`,
`libPSC`,
`deliveryName`, `deliveryStreet`, `deliveryCity`, `deliveryPSC`, `libEmail`, `contactPerson`, `contactPersonEmail`, `contactPersonTele`

from `reg_lib_2022`
where ( (`reg_lib_2022`.`orderSet0` <> 0) or (`reg_lib_2022`.`orderSet3` <> 0) )
    and
(
    (select `help_psc`.`kodkraj`
        from `help_psc`
        where ((`help_psc`.`psc` = `reg_lib_2022`.`libPSC`) and (`help_psc`.`nazobce` = `reg_lib_2022`.`libCity`))
        group by `help_psc`.`kodkraj`
        limit 1) = 86
) 

order by `reg_lib_2022`.`orderID`