import React from 'react';
import { Card, ProgressBar, Stack, Button } from 'react-bootstrap';
import { currencyFormatter } from '../utils';

export default function BudgetCard({name, amount, max, gray}) {

    const CLASSNAMES = [];
    if (amount > max) {
        CLASSNAMES.push("bg-danger", "bg-opacity-10");
    } else if (gray) {
        CLASSNAMES.push("bg-light")
    }

    return (
        <Card className={CLASSNAMES.join(" ")}>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                    <div className='me-2'>{name}</div>
                    <div className='d-flex align-items-baseline'>
                        {currencyFormatter.format(amount)}/<span className='text-muted fs-6'>{currencyFormatter.format(max)}</span> 
                    </div>
                </Card.Title>
                <ProgressBar 
                    className="rounded-pill" 
                    variant={setProgressBarColor(amount, max)}
                    min={0}
                    max={max}
                    now={amount}
                />
                <Stack direction='horizontal' gap='2' className='mt-4'>
                    <Button variant="outline-primary" className='ms-auto'>Add Expense</Button>
                    <Button variant="outline-secondary">View Expenses</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}

/**
 * 
 * @param {Number} amount 
 * @param {Number} max 
 */
 function setProgressBarColor(amount, max) {
    const RATIO = amount / max;

    if (RATIO < 0.5) return "primary";
    if (RATIO < 0.75) return "warning";

    return "danger";
}
