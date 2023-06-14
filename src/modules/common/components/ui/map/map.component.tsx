import React from 'react'
import 'leaflet/dist/leaflet.css'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import L from 'leaflet'
import * as Leaflet from 'react-leaflet'

const DEFAULT_MARKER_ICON = L.icon({
    iconUrl: iconUrl.src,
    shadowUrl: shadowUrl.src,
})

export const Root = React.forwardRef<
    React.ElementRef<typeof Leaflet.MapContainer>,
    React.ComponentPropsWithoutRef<typeof Leaflet.MapContainer> & {
        tileUrl?: string
    }
>(({ tileUrl, attributionControl = false, children, ...props }, ref) => (
    <Leaflet.MapContainer
        data-testid="map"
        ref={ref}
        {...props}
        attributionControl={attributionControl}
    >
        <Leaflet.TileLayer
            url={
                tileUrl ?? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            }
        />
        {children}
    </Leaflet.MapContainer>
))
Root.displayName = 'MapRoot'
export const MapRoot = Root

export const Marker = React.forwardRef<
    React.ElementRef<typeof Leaflet.Marker>,
    React.ComponentPropsWithoutRef<typeof Leaflet.Marker>
>(({ icon = DEFAULT_MARKER_ICON, ...props }, ref) => (
    <Leaflet.Marker icon={icon} ref={ref} {...props} />
))
Marker.displayName = 'MapMarker'
export const MapMarker = Marker

export const Popup = React.forwardRef<
    React.ElementRef<typeof Leaflet.Popup>,
    React.ComponentPropsWithoutRef<typeof Leaflet.Popup>
>(({ ...props }, ref) => <Leaflet.Popup ref={ref} {...props} />)
Popup.displayName = 'MapPopup'
export const MapPopup = Popup

export const Circle = React.forwardRef<
    React.ElementRef<typeof Leaflet.Circle>,
    React.ComponentPropsWithoutRef<typeof Leaflet.Circle>
>(({ ...props }, ref) => <Leaflet.Circle ref={ref} {...props} />)
Circle.displayName = 'MapCircle'
export const MapCircle = Circle

export const CircleMarker = React.forwardRef<
    React.ElementRef<typeof Leaflet.CircleMarker>,
    React.ComponentPropsWithoutRef<typeof Leaflet.CircleMarker>
>(({ ...props }, ref) => <Leaflet.CircleMarker ref={ref} {...props} />)
CircleMarker.displayName = 'MapCircleMarker'
export const MapCircleMarker = CircleMarker

export const Rectangle = React.forwardRef<
    React.ElementRef<typeof Leaflet.Rectangle>,
    React.ComponentPropsWithoutRef<typeof Leaflet.Rectangle>
>(({ ...props }, ref) => <Leaflet.Rectangle ref={ref} {...props} />)
Rectangle.displayName = 'MapRectangle'
export const MapRectangle = Rectangle

export const Polyline = React.forwardRef<
    React.ElementRef<typeof Leaflet.Polyline>,
    React.ComponentPropsWithoutRef<typeof Leaflet.Polyline>
>(({ ...props }, ref) => <Leaflet.Polyline ref={ref} {...props} />)
Polyline.displayName = 'MapPolyline'
export const MapPolyline = Polyline

export const Polygon = React.forwardRef<
    React.ElementRef<typeof Leaflet.Polygon>,
    React.ComponentPropsWithoutRef<typeof Leaflet.Polygon>
>(({ ...props }, ref) => <Leaflet.Polygon ref={ref} {...props} />)
Polygon.displayName = 'MapPolygon'
export const MapPolygon = Polygon

export const useMap = Leaflet.useMap
export const useMapEvent = Leaflet.useMapEvent
export const useMapEvents = Leaflet.useMapEvents
