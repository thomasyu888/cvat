/*
 * Copyright (C) 2018 Intel Corporation
 *
 * SPDX-License-Identifier: MIT
 */

window.addEventListener('engineReady', (e) => {
    // Auto save each 5 minutes
    $('#autoSaveTime').prop('value', 1);
    $('#autoSaveBox').attr('checked', true);
    $('#autoSaveBox').trigger('change');

    // Remove some buttons from menu
    $('#fullScreenButton').remove();
    $('#switchAAMButton').remove();
    $('#removeAnnotationButton').remove();

    $('#mergeTracksButton').remove()
    $('#groupShapesButton').remove()

    $('#polyShapeSizeWrapper').remove()
    $('#filterInputString').remove()

    $('#shapeModeSelector').prop('value', 'Annotation')

    $('#shapeTypeSelector').remove()


    const { annotationSaverModel } = e.detail;

    // Save annotation when user closes a page
    window.onbeforeunload = () => {
        /*
        * onbeforeunload has really strict syntax
        * in particular we can use only synchronous requests
        * if any errors occur, done work will be lost
        * argument "false" means that save requests will be NOT async
        * async requests from "onbeforeunload" aren't good
        */
        annotationSaverModel.save(false);
    };

    $('#saveButton').prependTo($('#menuButton').parent())
        .removeClass('menuButton semiBold').addClass('regular')
        .css({
            width: '150px',
        });

    $('#menuButton').remove();
});
