import React from 'react'
import {useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {getTickets , reset} from '../features/ticket/ticketSlice'
import Loader from '../component/Loader'
import BackButton from '../component/BackButton'
import TicketItem from '../component/TicketItem'

function Tickets() {
    const {isLoading , tickets , isSuccess} = useSelector((state)=> state.ticket)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTickets())
    } , [dispatch])

    useEffect(() => {
        return () => {
            if(isSuccess){
                dispatch(reset())
            }

        }
    } , [dispatch , isSuccess])

    if(isLoading){
        return <Loader/>
    }
  return (
    <>
        <BackButton url= '/'/>
        <h1>Tickets</h1>
        <div className="tickets">
            <div className="ticket-headings">
                <div>date</div>
                <div>Product</div>
                <div>Status</div>
                <div></div>
            </div>
            {tickets.map((ticket)=>{
                <TicketItem key={ticket._id} ticket={ticket}   />
            })}
        </div>


    </>
  )
}

export default Tickets