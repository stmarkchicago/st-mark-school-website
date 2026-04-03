"use client";
import React from "react";
import Heading from "./_Builtin/Heading";

export function H2(
    {
        as: _Component = Heading,
        title = "H2"
    }
) {
    return <_Component tag="h2">{title}</_Component>;
}